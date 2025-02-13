var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i =0; i < numberofDrumButtons; i ++ ) {
    document.querySelectorAll(".drum")[i].addEventListener('click', 
    function(){
        var buttonInnerHTML = this.innerHTML;
        var audio;
        makeSound(buttonInnerHTML);
    });
}
addEventListener('keypress',
    function (even){
        var keypress = even.key;
        var audio;
        makeSound(keypress);
    }
)

function makeSound(key){
    switch (key) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;

        case "a": 
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;

        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;

        case "j":
            audio = new Audio('sounds/snare.mp3');
            audio.play();
        break

        case "k":
            audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;

        case "l":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default:
            console.log(buttonInnerHTML);
    }
}
// var audio = new Audio('sounds/tom-1.mp3'); // mySound = new Audio([URLString]);
//         audio.play();