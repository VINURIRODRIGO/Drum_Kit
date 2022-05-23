var totalButtons = document.querySelectorAll(".drum").length;
var sound = ["tom-1", "tom-2", "tom-3", "tom-4", "snare",  "crash", "kick-bass"];
for(let i = 0; i < totalButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var audio = new Audio("sounds/"+sound[i]+".mp3");
        audio.play();

        });
}

document.addEventListener("keydown", keyP);
function keyP (e) {
    switchCheck(e.key);
}

function switchCheck(comparison){
    switch (comparison) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
 
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
 
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
 
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
 
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
 
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
 
                
        default:
            break;
    }
};