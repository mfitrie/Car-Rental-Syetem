'use strict'

const disableTextHighlighting = document.querySelector('.disable-text');

const background_popup = document.querySelector('.background-popup');
const [btnSignUp, btnSignIn] = document.querySelectorAll('.header_ul_button li');
const signUpForm = document.querySelector('.div_signUp');
const signInForm = document.querySelector('.div_signIn');

const closeIconSignUp = document.querySelector('.iconCloseSignUp')
const closeIconSignIn = document.querySelector('.iconCloseSignIn')

console.log(btnSignUp);

btnSignUp.addEventListener('click', function(){
    // signUpForm.style.visibility = "visible";
    // signUpForm.style.transform = "translate(0%,-0.5%)"
    signUpForm.classList.add('is-active');
    background_popup.style.visibility = "visible";
});

closeIconSignUp.addEventListener('click', function(){
    signUpForm.classList.remove('is-active')
    background_popup.style.visibility = "hidden";
});


btnSignIn.addEventListener('click', function(){
    signInForm.classList.add('isSignIn-active');
    background_popup.style.visibility = "visible";
});

closeIconSignIn.addEventListener('click', function(){
    console.log('icon clicked');
    signInForm.classList.remove('isSignIn-active')
    background_popup.style.visibility = "hidden";
});





// animation //
