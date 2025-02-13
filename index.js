var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i =0; i < numberofDrumButtons; i ++ ) {
    document.querySelectorAll(".drum")[i].addEventListener('click', 
    function(){
        var buttonInnerHTML = this.innerHTML;
        var audio;
        makeSound(buttonInnerHTML);
        ButtomAnimation(buttonInnerHTML);
    });
}
addEventListener('keypress',
    function (even){
        var keypress = even.key;
        makeSound(keypress);
        ButtomAnimation(keypress);
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

function ButtomAnimation(key){
    var activeButtom = document.querySelector("." + key);
    activeButtom.classList.add("pressed");

    setTimeout(function(){
        activeButtom.classList.remove("pressed");
    }, 50)
}
// var audio = new Audio('sounds/tom-1.mp3'); // mySound = new Audio([URLString]);
//         audio.play();