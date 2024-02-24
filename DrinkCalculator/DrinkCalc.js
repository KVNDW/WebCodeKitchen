const beerButton = document.getElementById('button1');

const display = document.getElementById('display');




const updateValue = () =>{
    display.textContent = Number(display.textContent)+1;


}




beerButton.addEventListener("click",updateValue)