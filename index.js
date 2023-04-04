//Added click listener to buttons using for loop and selecting .drum with [array]
for (var i = 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // this is used to select what element triggered the event and used innerHTML to get corresponding letter clicked
        let buttonInnerHTML = this.innerHTML;
        // click event triggers sound and animation by passing parameter to functions
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Added keydown listener to trigger sound and animation
// (e) parameter used to pass on data of what triggered the event
document.addEventListener("keydown", function(e){
    playSound(e.key);
    buttonAnimation(e.key);
})

// function used to receive click and keydown data to check if correct keys were triggered to play sound
function playSound(trigger){
    switch (trigger) {
        case "w":
            var playSound = new Audio("sounds/crash.mp3");
            playSound.play();
            break;
        
        case "a":
            var playSound = new Audio("sounds/kick-bass.mp3");
            playSound.play();
            break;

        case "s":
            var playSound = new Audio("sounds/snare.mp3")
            playSound.play();
            break;
        
        case "d":
            var playSound = new Audio("sounds/tom-1.mp3")
            playSound.play();
            break;
        
        case "j":
            var playSound = new Audio("sounds/tom-2.mp3")
            playSound.play();
            break;
        
        case "k":
            var playSound = new Audio("sounds/tom-3.mp3")
            playSound.play();
            break;

        case "l":
            var playSound = new Audio("sounds/tom-4.mp3")
            playSound.play();
            break;
        
        default:
            break;
    }
}

// adds animation by receiving key and click triggers and toggles .pressed with add and remove
function buttonAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}