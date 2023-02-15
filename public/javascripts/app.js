
// Raqamlarni Formatlash uchun 1000000 > 1 000 000
const priceNumber = document.querySelectorAll('.formatPrice span')
async function formattingNumber(){
    for(let i = 0 ; i < priceNumber.length; i++){
        var nums = await Number(priceNumber[i].textContent)
        priceNumber[i].textContent = nums.toLocaleString('ru-Ru')
    }
}
formattingNumber()


  // Select Option get Answer 
  function show(opt) {
    document.querySelector('.dropdown-page .select-box').value = opt
}

let dropdown = document.querySelector(".dropdown-page");
dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});