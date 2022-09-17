
for ( var i=0;i< document.querySelectorAll(".drum").length ;i++)
{
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        switchCases(this.innerHTML);
        buttonAnimation(this.innerHTML);;

     } );//foe mouse click
                
    
    document.addEventListener("keydown", function(event){
        switchCases(event.key);
        buttonAnimation(event.key);

    });//for keyboard
}

///to play sound
 function switchCases(key){
    console.log(key);
switch(key){
    case "w": var tom1= new Audio("sounds/tom-1.mp3");
    tom1.play(); 
    break;

    case "a": var tom2= new Audio("sounds/tom-2.mp3");
    tom2.play(); 
    break;

    case "s": var tom3= new Audio("sounds/tom-3.mp3");
    tom3.play(); 
    break;

    case "d": var tom4= new Audio("sounds/tom-4.mp3");
    tom4.play(); 
    break;

    case "j": var crash= new Audio("sounds/crash.mp3");
    crash.play(); 
    break;

    case "k": var kick= new Audio("sounds/kick-bass.mp3");
    kick.play(); 
    break;

    case "l": var snare= new Audio("sounds/snare.mp3");
    snare.play(); 
    break;
}

};


function buttonAnimation(currentKey){
   var activateButton = document.querySelector("."+currentKey);
   activateButton.classList.add("pressed");
   setTimeout(function(){
    activateButton.classList.remove("pressed")
   },100);
}







//var tom= new Audio("sounds/tom-1.mp3");
  //      tom.play();