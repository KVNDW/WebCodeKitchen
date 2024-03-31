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
            clickedButton.textContent = `${drinks[buttonId].name} (${drinks[buttonId].clickcount})`;
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
    
    //set content from specific drink for receipt
    nameContainer.textContent = `${drinkname} `;
    priceContainer.textContent = `${price} CHF`;

    //add containers to returncontainer
    receiptContainer.appendChild(nameContainer);
    receiptContainer.appendChild(priceContainer);
    
    return receiptContainer;
}

const fullscreen = () =>{

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
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