const mobileMenuButton = document.querySelector(".button__mobile");
const wrap = document.querySelector(".wrap");

mobileMenuButton.onclick = function(){
    mobileMenuButton.classList.toggle("button__active");
    wrap.classList.toggle("wrap__overflow");
    return null;
};


let select = function () {
    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.field__select'),
            currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();



let slider = document.querySelector('.range-slider .slider');
let output = document.querySelector('.range-slider .value');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};