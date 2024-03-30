//used in updateValue
const drinksContainer = document.querySelector('.drinks-container');
const deletebutton = document.getElementById('delete');
//used for receipt
const display = document.getElementById('display');
const receipt = document.getElementById('receipt');
//fullscreen
const fulsscreenbutton = document.getElementById('to-fullscreen');

//data
let totalCost=0;
const drinks ={
    button1:{name: "Bier",price:5},
    button2:{name: "Vodka Mate",price:10},
    button3:{name: "Sex on the Beach",price:15},
    button4:{name: "Shot",price:6},
    button5:{name: "Vodka-E",price:16},
    button6:{name: "Wasser+",price:20},
    button7:{name: "Gin Tonic",price:5},
    button8:{name: "Wasser Special",price:10},
}

const updateValue = (buttonId) =>{

    if(buttonId != 'delete'){
        totalCost +=  drinks[buttonId].price;
        const receiptComponent = receiptprojecor(drinks[buttonId].name, drinks[buttonId].price);
        receipt.appendChild(receiptComponent);

    }else{
        receipt.innerHTML = '';
        totalCost=0;
    }
    display.textContent = `${totalCost} CHF`;
}

const receiptprojecor =(drinkname, price)=>{

    //container where all elements are in
    const receiptContainer = document.createElement('div');
    receiptContainer.setAttribute('class','receipt-container');

    //set name attribute
    const nameContainer = document.createElement('div');
    nameContainer.setAttribute('class','receipt-name');

    //set price attribute
    const priceContainer = document.createElement('div');
    priceContainer.setAttribute('class','receipt-price');


    nameContainer.textContent = `${drinkname} `;
    priceContainer.textContent = `${price} CHF`;





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

// new buttoneventlistener
drinksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('drink-button')) {
        updateValue(event.target.id);
    }
});

deletebutton.addEventListener("click",() =>updateValue(deletebutton.id));

//fullscreen listener
fulsscreenbutton.addEventListener("click",fullscreen );