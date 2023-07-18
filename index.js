var allButtons = document.querySelectorAll(".drum");

for ( var i = 0; i < allButtons.length; i++ ){
    allButtons[i].addEventListener("click", function(){
        var buttonKey = this.textContent;
        
        playSound(buttonKey);
        keyFlashAnimation(buttonKey);
    })
}

function playSound ( letter ) {
    var tom1 = new Audio("./sounds/tom-1.mp3");
    var tom2 = new Audio("./sounds/tom-2.mp3");
    var tom3 = new Audio("./sounds/tom-3.mp3");
    var tom4 = new Audio("./sounds/tom-4.mp3");
    var snare = new Audio("./sounds/snare.mp3");
    var kickBass = new Audio("./sounds/kick-bass.mp3");
    var crash = new Audio("./sounds/crash.mp3");

    if ( letter == "w" ) {
        tom1.play();
    }
    else if ( letter == "a" ){
        tom2.play();
    }
    else if ( letter == "s" ){
        tom3.play();
    }
    else if ( letter == "d" ){
        tom4.play();
    }
    else if ( letter == "j" ){
        crash.play();
    }
    else if ( letter == "k" ){
        kickBass.play();
    }
    else if ( letter == "l" ){
        snare.play();
    }
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    keyFlashAnimation(event.key);
});

function keyFlashAnimation( letter ){
    var className = "." + letter;
    document.querySelector(className).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(className).classList.remove("pressed");
    }, 100);
}