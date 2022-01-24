'use strict'

const paymentForm = document.querySelector('.main_div_paymentContainer');
const backgroundPopup = document.querySelector('.background-popup');
const btnPay = document.querySelector('.btnPay');

btnPay.addEventListener('click', function(e){
    e.preventDefault();
    document.forms['paymentForm'].submit();
})

