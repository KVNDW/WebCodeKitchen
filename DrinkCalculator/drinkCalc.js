import { drinks } from './data.js';
//set up for listener

const drinksContainer = document.querySelector('.drinks-container');
const deletebutton = document.getElementById('delete');
const display = document.getElementById('display');
const receipt = document.getElementById('receipt');
const fullscreenbutton = document.getElementById('to-fullscreen');

//data
let totalCost=0;


const updateValue = (buttonId) =>{

    if(buttonId != 'delete'){
        drinks[buttonId].clickcount +=1;

        const clickedButton = document.getElementById(buttonId);
        if(clickedButton) {
            clickedButton.innerHTML = `${drinks[buttonId].name} <br>(${drinks[buttonId].clickcount})`;
        }

        totalCost +=  drinks[buttonId].price;
        const receiptComponent = receiptprojector(drinks[buttonId].name, drinks[buttonId].price);
        receipt.appendChild(receiptComponent);

    }else{

        Object.keys(drinks).forEach(key => {
            drinks[key].clickcount = 0;
            const currentButton=document.getElementById(key);
            currentButton.textContent = `${drinks[key].name}`;
        });

        receipt.innerHTML = '';
        totalCost=0;
    }
    display.textContent = `${totalCost} CHF`;
}

const receiptprojector =(drinkname, price)=>{

    //container where all elements are in
    const receiptContainer = document.createElement('div');
    receiptContainer.setAttribute('class','receipt-container');

    //set name attribute
    const nameContainer = document.createElement('div');
    nameContainer.setAttribute('class','receipt-name');

    //set price attribute
    const priceContainer = document.createElement('div');
    priceContainer.setAttribute('class','receipt-price');

    const closecontainer = document.createElement('button')
    closecontainer.setAttribute('type','button')
    
    //set content from specific drink for receipt
    closecontainer.textContent='x';
    nameContainer.textContent = `${drinkname} `;
    priceContainer.textContent = `${price} CHF`;

    //add containers to returncontainer
    //receiptContainer.appendChild(closecontainer);
    receiptContainer.appendChild(nameContainer);
    receiptContainer.appendChild(priceContainer);
    
    return receiptContainer;
}

const fullscreen = () => {

    if (!document.fullscreenElement) {

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


// eventlistener
drinksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('drink-button')) {
        updateValue(event.target.id);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateValue('delete');
});

deletebutton.addEventListener("click",() =>updateValue(deletebutton.id));
fullscreenbutton.addEventListener("click",fullscreen );