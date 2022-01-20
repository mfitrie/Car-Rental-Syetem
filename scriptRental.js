'use strict'

const selectCard = document.querySelector('.main_rentSelect_card');
const [car1, car2, car3, car4, car5, car6, car7] = document.querySelectorAll('.card_property');
const dataId = "data-id";

const rentForm = document.querySelector('.main_div_rentalFormContainer');
const containerCarImage = document.querySelector('.main_rentalFormContainer_carImage');
const carImage = document.querySelector('.main_rentalFormContainer_carImage');
const carNameForm = document.querySelector('.vehicleName');

// DATA CAR
const listCarImage = ["Car_Image/honda_civic.png", "Car_Image/ford_mustang.png", "Car_Image/nissan-gtr.png", "Car_Image/honda_jazz.png", "Car_Image/toyota_vios.png", "Car_Image/perodua_aruz.png", "Car_Image/perodua_myvi.png"];
const listCarName = ["Honda Civic", "Ford Mustang", "Nissan GTR", "Honda Jazz", "Toyota Vios", "Perodua Aruz", "Perodua Myvi"];

// ICON
const iconLeft = document.querySelector('.iconLeft');
const iconRight = document.querySelector('.iconRight');
const iconCloseForm = document.querySelector('.iconCloseForm');

// OTHER
const popupBackground = document.querySelector('.background-popup');


let i = 10;

iconRight.addEventListener('click', function(e){

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
});



iconLeft.addEventListener('click', function(e){

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

});





car1.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[0]}" alt="${car1.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[0]);

    popupBackground.style.visibility = 'visible';
});

car2.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[1]}" alt="${car1.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[1]);

    popupBackground.style.visibility = 'visible';

});

car3.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[2]}" alt="${car3.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[2]);

    popupBackground.style.visibility = 'visible';

});

car4.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[3]}" alt="${car4.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[3]);

    popupBackground.style.visibility = 'visible';

});

car5.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[4]}" alt="${car5.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[4]);

    popupBackground.style.visibility = 'visible';

});

car6.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[5]}" alt="${car6.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[5]);

    popupBackground.style.visibility = 'visible';

});

car7.addEventListener('click', ()=>{
    console.log('im clicked');
    rentForm.classList.add('form-active');

    const image = `<img src="${listCarImage[6]}" alt="${car7.getAttribute(dataId)}">`;
    carImage.insertAdjacentHTML('afterbegin', image);
    carNameForm.insertAdjacentHTML('afterbegin', listCarName[6]);

    popupBackground.style.visibility = 'visible';

});


// close form
iconCloseForm.addEventListener('click', ()=>{
    rentForm.classList.remove('form-active');
    containerCarImage.removeChild(containerCarImage.childNodes[0]);
    carNameForm.textContent = "";

    popupBackground.style.visibility = 'hidden';
});





console.log(car1.getAttribute(dataId));

