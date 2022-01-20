'use strict'

const selectCard = document.querySelector('.main_rentSelect_card');
const [car1, car2, car3, car4, car5, car6, car7] = document.querySelectorAll('.card_property');
const dataId = "data-id";

const rentForm = document.querySelector('.main_div_rentalFormContainer');
const containerCarImage = document.querySelector('.main_rentalFormContainer_carImage');
const carForm = document.querySelector('.main_rentalFormContainer_rentalForm');
const carImage = document.querySelector('.main_rentalFormContainer_carImage');
const carNameForm = document.querySelector('.vehicleName');
const buttonConfirmRent = document.querySelector('.main_rentalFormContainer_rentalForm button');

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





car1.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car1.getAttribute(dataId));

        const image = `<img src="${listCarImage[0]}" alt="${car1.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[0]);


        popupBackground.style.visibility = 'visible';
    }
    
});

car2.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car2.getAttribute(dataId));
    
        const image = `<img src="${listCarImage[1]}" alt="${car1.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[1]);
    
        popupBackground.style.visibility = 'visible';    

    }

});

car3.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');
        
        carForm.setAttribute('data-id', car3.getAttribute(dataId));
    
    
        const image = `<img src="${listCarImage[2]}" alt="${car3.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[2]);
    
        popupBackground.style.visibility = 'visible';
    }

});

car4.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');
        
        carForm.setAttribute('data-id', car4.getAttribute(dataId));
    
    
        const image = `<img src="${listCarImage[3]}" alt="${car4.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[3]);
    
        popupBackground.style.visibility = 'visible';
    }
});

car5.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car5.getAttribute(dataId));
    
        const image = `<img src="${listCarImage[4]}" alt="${car5.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[4]);
    
        popupBackground.style.visibility = 'visible';
    }

});

car6.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car6.getAttribute(dataId));
    
        const image = `<img src="${listCarImage[5]}" alt="${car6.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[5]);
    
        popupBackground.style.visibility = 'visible';
    }
});

car7.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[7]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car7.getAttribute(dataId));

        const image = `<img src="${listCarImage[6]}" alt="${car7.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[6]);

        popupBackground.style.visibility = 'visible';
    }
});


// button rent form
buttonConfirmRent.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(buttonConfirmRent.parentNode.getAttribute(dataId));
});

// close form
iconCloseForm.addEventListener('click', ()=>{
    rentForm.classList.remove('form-active');
    containerCarImage.removeChild(containerCarImage.childNodes[0]);
    carNameForm.textContent = "";

    popupBackground.style.visibility = 'hidden';
});





// console.log(car1.getAttribute(dataId));

