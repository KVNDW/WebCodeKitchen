const beerButton1 = document.getElementById('button1');
const beerButton4 = document.getElementById('button4');

const fullscreenbutton = document.getElementById('to-fullscreen');

const display = document.getElementById('display');




const updateValue = () =>{
    display.textContent = Number(display.textContent)+1;

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


beerButton1.addEventListener("click",updateValue);
beerButton4.addEventListener("click",updateValue);
fullscreenbutton.addEventListener("click",fullscreen );