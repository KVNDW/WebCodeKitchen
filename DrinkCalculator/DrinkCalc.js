const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');


const display = document.getElementById('display');

const receipt = document.getElementById('receipt');

const fulsscreenbutton = document.getElementById('to-fullscreen');




let totalCost=0;

const updateValue = () =>{
    totalCost+=5;

    display.textContent = `${totalCost} CHF`;

    console.log("button pressed");

    const receiptComponent = receiptprojecor();
    receipt.appendChild(receiptComponent);
}

const receiptprojecor =()=>{

    const container = document.createElement('div');
    container.setAttribute('class','receipt-projector-container');

    const receipt = document.createElement('div');
    receipt.setAttribute('class','receipt-container');
    receipt.textContent = 'Beer 5 CHF';

    container.appendChild(receipt);

    return container;
}

const fullscreen = () =>{

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
}

//buttons event listener
button1.addEventListener("click",updateValue);
button2.addEventListener("click",updateValue);
button3.addEventListener("click",updateValue);
button4.addEventListener("click",updateValue);
button5.addEventListener("click",updateValue);
button6.addEventListener("click",updateValue);
button7.addEventListener("click",updateValue);
button8.addEventListener("click",updateValue);

//fullscreen listener
fulsscreenbutton.addEventListener("click",fullscreen );