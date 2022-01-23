'use strict'

const disableTextHighlighting = document.querySelector('.disable-text');

const background_popup = document.querySelector('.background-popup');
const [btnSignUp, btnSignIn] = document.querySelectorAll('.header_ul_button li');
const signUpForm = document.querySelector('.div_signUp');
const signInForm = document.querySelector('.div_signIn');

const emailSignIn = document.querySelector('.email');
const passwordSignIn = document.querySelector('.password');

const submit_sign_up = document.querySelector('.btn_submitSignUp');
const submit_sign_in = document.querySelector('.btn_submitSignIn');

const closeIconSignUp = document.querySelector('.iconCloseSignUp');
const closeIconSignIn = document.querySelector('.iconCloseSignIn');

// console.log(btnSignUp);

btnSignUp.addEventListener('click', function(e){
    // signUpForm.style.visibility = "visible";
    // signUpForm.style.transform = "translate(0%,-0.5%)"
    signUpForm.classList.add('is-active');
    background_popup.style.visibility = "visible";
    
    // signUpForm.submit();
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




// FORM SUBMIT
submit_sign_up.addEventListener('click', function(e){
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Sign up success!',
      });
    
    setTimeout(function(){
        document.forms['SignUpForm'].submit()
    }, 2000);  
});





// AJAX SIGN IN VALIDATION
submit_sign_in.addEventListener('click',function(e){
    e.preventDefault();

    isCorrect(emailSignIn.value, passwordSignIn.value);
});



const isCorrect = function(email, password){
    fetch('http://localhost/Web%20Project%20ICT600/frontPage/AJAXLogin.php')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(res => {

        const dataFilter = res.filter(data => {
            return data[0] === email && data[1] === password;
        });

        console.log(dataFilter);

        if(dataFilter.length !== 0){
            console.log('In TRUE');
            
            Swal.fire({
                icon: 'success',
                title: 'Awesome',
                text: 'Login successful!',
                showConfirmButton: false,
                timer: 1500
                });

            setTimeout(function(){
                // sign_in_form.submit();

                document.forms["SignInForm"].submit();
                }, 2000);
        } else{
            console.log('In FALSE');

                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or password is incorrect, please try again!'
            })
        }
        
    })
    .catch(e => {
        console.log(e);
    });
};






