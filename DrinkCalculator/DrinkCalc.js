//set uo for listener
const drinksContainer = document.querySelector('.drinks-container');
const deletebutton = document.getElementById('delete');
const display = document.getElementById('display');
const receipt = document.getElementById('receipt');
const fulsscreenbutton = document.getElementById('to-fullscreen');

const buttonScreen4 = document.getElementById('text-button4');

//data
let totalCost=0;
const drinks ={
    button1:{name: "Bier",price:5,clickcount:0},
    button2:{name: "Vodka Mate",price:10,clickcount:0},
    button3:{name: "Sex on the Beach",price:15,clickcount:0},
    button4:{name: "Shot",price:6,clickcount:0},
    button5:{name: "Vodka-E",price:16,clickcount:0},
    button6:{name: "Wasser+",price:20,clickcount:0},
    button7:{name: "Gin Tonic",price:5,clickcount:0},
    button8:{name: "Wasser Special",price:10,clickcount:0},
}

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

deletebutton.addEventListener("click",() =>updateValue(deletebutton.id));
fulsscreenbutton.addEventListener("click",fullscreen );