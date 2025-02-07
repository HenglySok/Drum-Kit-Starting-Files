var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i =0; i < numberofDrumButtons; i ++ ) {
    document.querySelectorAll(".drum")[i].addEventListener('click', 
    function(){
        this.style.color = "white";
    });
}


// var audio = new Audio('sounds/tom-1.mp3'); // mySound = new Audio([URLString]);
//         audio.play();