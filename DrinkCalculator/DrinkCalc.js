const beerButton1 = document.getElementById('button1');

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
fulsscreenbutton.addEventListener("click",fullscreen );


beerButton1.addEventListener("click",updateValue);

