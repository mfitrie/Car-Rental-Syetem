'use strict'

const selectCard = document.querySelector('.main_rentSelect_card');

const iconLeft = document.querySelector('.iconLeft');
const iconRight = document.querySelector('.iconRight');


let i = 0;

iconLeft.addEventListener('click', function(e){

    i=i+10;
    
    if(i<0){
        console.log(`In (i < 0) = ${-i}`);
        selectCard.style.transform = `translateX(${i}%)`;
    }

    console.log(`icon left = ${i}`);

    if(i===0){
        selectCard.style.transform = `translateX(${i}%)`;
    }

    if(i>0){
        selectCard.style.transform = `translateX(${i}%)`;
    }

    console.log("");
})



iconRight.addEventListener('click', function(e){

    i=i-10;
    if(i < 0){
        console.log(`In (i < 0) = ${-i}`);
        selectCard.style.transform = `translateX(${i}%)`;
    }

    if(i === 0){
        selectCard.style.transform = `translateX(${i}%)`;
    }

    if(i > 0){
        selectCard.style.transform = `translateX(${i}%)`;
    }

    console.log("");

})

