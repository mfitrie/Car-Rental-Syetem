'use strict'

const selectCard = document.querySelector('.main_rentSelect_card');
const [car1, car2, car3, car4, car5, car6, car7] = document.querySelectorAll('.card_property');
const dataId = "data-id";

const rentForm = document.querySelector('.main_div_rentalFormContainer');
const containerCarImage = document.querySelector('.main_rentalFormContainer_carImage');
const carForm = document.querySelector('.main_rentalFormContainer_rentalForm');
const carImage = document.querySelector('.main_rentalFormContainer_carImage');
const carNameForm = document.querySelector('.vehicleName');
const buttonConfirmRent = document.querySelector('.btnConfirmRent');


// CREATE ELEMENT INPUT
const inputVehicleName = document.createElement("input");

// // Payement form
// const paymentContainer = document.querySelector('.main_div_paymentContainer');

// DATA CAR
const listCarImage = ["honda_civic.png", "ford_mustang.png", "nissan-gtr.png", "honda_jazz.png", "toyota_vios.png", "perodua_aruz.png", "perodua_myvi.png"];
const listCarName = ["Honda Civic", "Ford Mustang", "Nissan GTR", "Honda Jazz", "Toyota Vios", "Perodua Aruz", "Perodua Myvi"];

// ICON
const iconLeft = document.querySelector('.iconLeft');
const iconRight = document.querySelector('.iconRight');
const iconCloseForm = document.querySelector('.iconCloseForm');
const iconClosePayment = document.querySelector('.iconClosePayment');



// CURRENT RENT DROPDOWN MENU
const currentRent = document.querySelector('.dropdownContainer');


// OTHER
const popupBackground = document.querySelector('.background-popup');









///////////////////////////// ARROW NAVIGATION ///////////////////////////// 
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

///////////////////////////// ARROW NAVIGATION ///////////////////////////// 







///////////////////////////// FORM ///////////////////////////// 

car1.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', `${car1.getAttribute(dataId)}`);

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car1.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);

        

        const image = `<img src="${listCarImage[0]}" alt="${car1.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[0]);
        
        
        popupBackground.style.visibility = 'visible';


    }
    
});

car2.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car2.getAttribute(dataId));

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car2.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);
    
        const image = `<img src="${listCarImage[1]}" alt="${car1.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[1]);
        
    
        popupBackground.style.visibility = 'visible';    

    }

});

car3.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');
        
        carForm.setAttribute('data-id', car3.getAttribute(dataId));

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car3.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);
    
    
        const image = `<img src="${listCarImage[2]}" alt="${car3.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[2]);
    
        popupBackground.style.visibility = 'visible';
    }

});

car4.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');
        
        carForm.setAttribute('data-id', car4.getAttribute(dataId));

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car4.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);
    
    
        const image = `<img src="${listCarImage[3]}" alt="${car4.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[3]);
    
        popupBackground.style.visibility = 'visible';
    }
});

car5.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car5.getAttribute(dataId));

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car5.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);
    
        const image = `<img src="${listCarImage[4]}" alt="${car5.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[4]);
    
        popupBackground.style.visibility = 'visible';
    }

});

car6.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car6.getAttribute(dataId));

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car6.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);
    
        const image = `<img src="${listCarImage[5]}" alt="${car6.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[5]);
    
        popupBackground.style.visibility = 'visible';
    }
});

car7.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget.childNodes[3]){
        rentForm.classList.add('form-active');

        carForm.setAttribute('data-id', car7.getAttribute(dataId));

        // CREATE INPUT FROM JS
        inputVehicleName.setAttribute('name', 'carName');
        inputVehicleName.setAttribute('value', car7.getAttribute(dataId));
        inputVehicleName.style.visibility = "hidden";
        carForm.appendChild(inputVehicleName);

        const image = `<img src="${listCarImage[6]}" alt="${car7.getAttribute(dataId)}">`;
        carImage.insertAdjacentHTML('afterbegin', image);
        carNameForm.insertAdjacentHTML('afterbegin', listCarName[6]);

        popupBackground.style.visibility = 'visible';
    }
});

///////////////////////////// FORM ///////////////////////////// 


// button rent form
buttonConfirmRent.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(buttonConfirmRent.parentNode.getAttribute(dataId));
    document.forms['rentalForm'].submit();
});

// close form
iconCloseForm.addEventListener('click', ()=>{
    rentForm.classList.remove('form-active');
    containerCarImage.removeChild(containerCarImage.childNodes[0]);
    carNameForm.textContent = "";

    popupBackground.style.visibility = 'hidden';
});




/////////////////////////////////// CURRENT RENT DROPDOWN MENU ///////////////////////////////////
const listRentCard = document.querySelector('.List-rent-card');
// listRentCard.removeChild(listRentCard.childNodes[]);


const getDataCurrentRent = function(listRentCard){
    fetch('http://localhost/Web%20Project%20ICT600/rentalPage/AJAX_info_rental.php')
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log(res);
        if(res.length !== 0){
            // console.log(listRentCard.childNodes[1]);
            listRentCard.removeChild(listRentCard.childNodes[1]);

            res.forEach((data, i)=>{
                // console.log(i[0]);
                let div = `<div class="dropdownContainer car-${i+1}">
                                    <img src="${listCarImage[i]}" alt="car">
                                    <div>
                                        <span class="carName">${data[0]}</span>
                                        <span class="rentDate">From <span class="fromDate">${data[1]}</span> to <span class="toDate">${data[2]}</span></span>
                                    </div>
                        </div>`

                listRentCard.insertAdjacentHTML('afterbegin', div);
                
                const car = document.querySelector(`.car-${i+1}`);                       
                car.setAttribute('data-id', data[0]);
                
                // CREATE FORM 
                const carForm = document.createElement('form');
                carForm.setAttribute('method','get');
                carForm.setAttribute('name','formSubmitCurrentRent');
                carForm.setAttribute('data-id',`${data[0]}`);
                carForm.setAttribute('action', 'http://localhost/Web%20Project%20ICT600/updateReturnRent.php');
                car.append(carForm);

                const carReturnInputName = document.createElement('input');
                carReturnInputName.setAttribute('type','text');
                carReturnInputName.setAttribute('name','car_name');
                carReturnInputName.setAttribute('value', `${data[0]}`);
                carReturnInputName.style.visibility = "hidden";


                const fromDate = document.createElement('input');
                fromDate.setAttribute('type','date');
                fromDate.setAttribute('name','fromDate');
                fromDate.setAttribute('value', `${data[1]}`);
                fromDate.style.visibility = "hidden";

                const toDate = document.createElement('input');
                toDate.setAttribute('type','date');
                toDate.setAttribute('name','toDate');
                toDate.setAttribute('value', `${data[2]}`);
                toDate.style.visibility = "hidden";

                const inputSubmit = document.createElement('input');
                inputSubmit.setAttribute('type','submit');
                inputSubmit.setAttribute('value', 'submit');
                inputSubmit.style.visibility = "hidden";

                carForm.appendChild(carReturnInputName);
                carForm.appendChild(fromDate);
                carForm.appendChild(toDate);
                carForm.appendChild(inputSubmit);

                

                car.addEventListener('click', function(e){
                    // document.forms['formSubmitCurrentRent'].submit();

                    // console.log(`car ${data[0]} clicked`);

                    inputSubmit.form.submit();
                });


            });

            
        }
    });
}
            


getDataCurrentRent(listRentCard);

if(currentRent !== null){
    currentRent.addEventListener('click', (e)=>{
        Swal.fire({
            title: 'Return the car now?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, return the car'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          });
    });
}
/////////////////////////////////// CURRENT RENT DROPDOWN MENU ///////////////////////////////////





