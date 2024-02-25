const beerButton1 = document.getElementById('button1');
const beerButton4 = document.getElementById('button4');

const display = document.getElementById('display');




const updateValue = () =>{
    display.textContent = Number(display.textContent)+1;



}




beerButton1.addEventListener("click",updateValue);
beerButton4.addEventListener("click",updateValue)