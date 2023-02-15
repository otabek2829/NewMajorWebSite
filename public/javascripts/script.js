let body = document.querySelector('body')
let windowWidth = window.innerWidth;


// Raqamlarni Formatlash uchun 1000000 > 1 000 000
const priceNumber = document.querySelectorAll('.formatPrice')
async function formattingNumber(){
    for(let i = 0 ; i < priceNumber.length; i++){
        var nums = await Number(priceNumber[i].textContent)
        priceNumber[i].textContent = nums.toLocaleString('ru-Ru')
        // Satrni Raqamga aylantirish | matn orasidagi sonlarni tortib olish
        // Number(priceNumber[i].textContent.replace(/\D/g, "")).toLocaleString('ru-Ru');
    }
}
formattingNumber()

// Navbar ishlari

const bottomPage = document.querySelector('.navbars .bottom-page')
const btn = document.querySelector('.navbars .bottom-page button')
const clock = document.querySelector('.navbars .bottom-page .clock')


// navbar btn active menu max-width:768px 
const navbar = document.querySelector('.navbars')
const navs = document.querySelector('.navs')

if (!navbar.classList.contains('navBtnMenuActive')) {
    navs.classList.add('hide')
} else {
    bottomPage.classList.toggle('show')
    btn.classList.toggle('show')
    clock.classList.toggle('show')
}


function burgerBtn() {
    let bars = document.querySelector('#navBtnMenu i')
    let barsDivs = document.querySelectorAll('#navBtnMenu div')
    barsDivs.forEach(e => { e.classList.toggle('none')});

    bars.classList.toggle('bi-x-circle-fill')

    navbar.classList.toggle('navBtnMenuActive')
    navs.style.display = 'block'

    if (navbar.classList.contains('navBtnMenuActive')) {
        body.style.overflowY = 'hidden'
        let wdth = navbar.clientWidth - 30
        // Bottom page ko'rinishi 
        bottomPage.style.width = `${wdth}px`;
        bottomPage.classList.add('show')
        btn.classList.add('show')
        clock.classList.add('show')
    } else {
        navs.style.display = 'none'
        body.style.overflowY = 'visible'

        // Bottom page yo'qolishi
        bottomPage.classList.remove('show')
        btn.classList.remove('show')
        clock.classList.remove('show')
    }
}

// Otziv Video HOVER Fuunction
const viewsBtn = document.querySelectorAll('#otziv .otziv-cards .box p')
const posterImg = document.querySelectorAll('#otziv .otziv-cards .box img')

for (let x = 0; x < posterImg.length; x++) {
    viewsBtn[x].addEventListener('mousemove', () => {
        posterImg[x].classList.add('scaleImg')
    })
    viewsBtn[x].addEventListener('mouseout', () => {
        posterImg[x].classList.remove('scaleImg')
    })
}

// XIZMAT NARXLARINI CHIQARISH
const li = document.querySelectorAll('section .uslugi-page ul li ')
const s = document.querySelectorAll('section .uslugi-page ul li s')

for (let i = 0; i < li.length; i++) {

    // Ekran Rasmeriga qarab funksiya ishlaydi
    if (windowWidth < 576) {
        li[i].addEventListener('mousemove', () => {
            s[i].style.opacity = '0'
            li[i].lastChild.style.opacity = 1
        })
        li[i].addEventListener('mouseout', () => {
            s[i].style.opacity = '1'
            li[i].lastChild.style.opacity = 0
        })
    } else {
        s[i].addEventListener('mousemove', () => {
            li[i].lastChild.style.opacity = 1
        })
        s[i].addEventListener('mouseout', () => {
            li[i].lastChild.style.opacity = 0
        })
    }
}


// Dumalooq titleni tekstini chiqarish uchun function
const box = document.querySelectorAll("section .preiumushustva-page .box")
const ellipse = document.querySelectorAll("section .preiumushustva-page .ellipse")

for (let x = 0; x < box.length; x++) {
    ellipse[x].addEventListener('mousemove', () => {
        box[x].classList.add('boxMargin')
        box[x].lastElementChild.style.opacity = 1

    })
    ellipse[x].addEventListener('mouseout', () => {
        box[x].lastElementChild.style.opacity = 0
        box[x].classList.remove('boxMargin')
    })
}

// USLUGI MENU SHOW END HIDE CLICK POSITION PAGE
const uslugi_menu = document.querySelector('.navs .navs-items .uslugi_menu_link')
const menu = document.querySelector('#uslugi-menu')


if (windowWidth < 991) {
    uslugi_menu.lastElementChild.classList.add('bi-caret-right-fill')
}

uslugi_menu.addEventListener('click', showMenuNavs)
function showMenuNavs() {
    if (windowWidth > 991) {
        uslugi_menu.lastElementChild.classList.toggle('bi-caret-up-fill')
        uslugi_menu.lastElementChild.classList.toggle('bi-caret-down-fill')
    }
    else {
        uslugi_menu.lastElementChild.classList.toggle('bi-caret-left-fill')
        uslugi_menu.lastElementChild.classList.toggle('bi-caret-right-fill')
    }
    menu.classList.toggle('show')
    navs.classList.toggle('leftNavsMenu')
    menu.classList.toggle('uslugiMenuPosition')
}


// PORTFOLIO HOVER Fuunction
const link = document.querySelectorAll('section .portfolio-cards .box a')
const img = document.querySelectorAll('section .portfolio-cards .box img')

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', () => {
        img[i].classList.add('scaleImgPortfolio')
    })
    link[i].addEventListener('mouseleave', () => {
        img[i].classList.remove('scaleImgPortfolio')
    })
}


// Select Option get Answer 
function show(opt) {
    document.querySelector('.dropdown-page .select-box').value = opt
}

let dropdown = document.querySelector(".dropdown-page");
dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// Hide Send message Screen 
let sendMessage = document.querySelector('.sendResumeScreen')


function sendMessageScreenHide() {
    sendMessage.style.display = 'none'
    body.style.overflowY = 'visible'
}
// Show Send message Screen 
function sendMessageScreenShow() {
    sendMessage.style.display = 'block'
    body.style.overflowY = 'hidden'
}


// active function Header Menu
function activeFunc() {
    const currentLocation = location.href
    const menuItem = document.querySelectorAll('.navs .navs-items li a')
    const menuItemParent = document.querySelectorAll('.navs .navs-items li')

    for (let i = 0; i < menuItem.length; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItemParent[i].className = 'activeLink'
        }
    }
}
activeFunc()