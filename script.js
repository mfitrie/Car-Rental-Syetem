'use strict'

const disableTextHighlighting = document.querySelector('.disable-text');

const [btnSignUp, btnSignIn] = document.querySelectorAll('.header_ul_button li');
const signUpForm = document.querySelector('.div_signUp');

console.log(btnSignUp);

btnSignUp.addEventListener('click', function(){
    // signUpForm.style.visibility = "visible";
    // signUpForm.style.transform = "translate(0%,-0.5%)"
    signUpForm.classList.add('is-active');
})

btnSignIn.addEventListener('click', function(){
})





// animation //
