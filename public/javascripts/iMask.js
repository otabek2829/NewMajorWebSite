let element = document.querySelectorAll('.formatMaskNumber')



var maskOptions = {
   mask: '+99{8}(00)000-00-00',
   lazy : false
 };
 
 element.forEach(element => element.addEventListener('focus', () => {
    var mask = IMask(element, maskOptions);
    mask.updateValue()
}));