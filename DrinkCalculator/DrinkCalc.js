const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');

const ee = document.getElementById('ee');


const display = document.getElementById('display');
const receipt = document.getElementById('receipt');

const fulsscreenbutton = document.getElementById('to-fullscreen');




let totalCost=0;

const updateValue = (button) =>{

    let drinkname="";
    let price=0;

    switch(button) {
        case 'button1':
            drinkname= "Bier";
            price = 5;
            break;
        case 'button2':
            drinkname= "Vodka Mate";
            price = 10;
            break;
        case 'button3':
            drinkname= "Sex on the Beach";
            price = 15;
            break;
        case 'button4':
            drinkname= "Shot";
            price = 6;
            break;
        case 'button5':
            drinkname= "Vodka-E";
            price = 16;
            break;
        case 'button6':
            drinkname= "Wasser+";
            price = 20;
            break;
        case 'button7':
            drinkname= "Gin Tonik";
            price = 5;
            break;
        case 'button8':
            drinkname= "Wasser Special";
            price = 10;
            break;
        default:
    }

    totalCost += price;



    display.textContent = `${totalCost} CHF`;

    const receiptComponent = receiptprojecor(drinkname, price);
    receipt.appendChild(receiptComponent);
}

const receiptprojecor =(drinkname, price)=>{

    const container = document.createElement('div');
    container.setAttribute('class','receipt-projector-container');

    const receipt = document.createElement('div');
    const receipt2 = document.createElement('div');
    receipt.setAttribute('class','receipt-container');
    receipt2.setAttribute('class','receipt-container');
    receipt.textContent = `${drinkname} : : : : : : : : : : : :`;
    receipt2.textContent = `  - ${price} CHF`;
    container.appendChild(receipt);
    container.appendChild(receipt2);


    return container;
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

//buttons event listener
button1.addEventListener("click",() =>updateValue(button1.id));
button2.addEventListener("click",() =>updateValue(button2.id));
button3.addEventListener("click",() =>updateValue(button3.id));
button4.addEventListener("click",() =>updateValue(button4.id));
button5.addEventListener("click",() =>updateValue(button5.id));
button6.addEventListener("click",() =>updateValue(button6.id));
button7.addEventListener("click",() =>updateValue(button7.id));
button8.addEventListener("click",() =>updateValue(button8.id));

//fullscreen listener
fulsscreenbutton.addEventListener("click",fullscreen );