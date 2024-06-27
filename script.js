//script for spark/main

const warpper = document.querySelector('.warpper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtnPopUp = document.getElementById("loginbtn-popupid");
const iconClose = document.getElementById('icon-close');

registerLink.addEventListener('click', ()=> {
    warpper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    warpper.classList.remove('active');
});

loginBtnPopUp.addEventListener('click', ()=> {
    warpper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    warpper.classList.remove('active-popup');
});
