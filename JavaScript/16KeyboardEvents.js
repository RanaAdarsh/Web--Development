let inpt = document.querySelector("input");
inpt.addEventListener("keydown",function(event){
    console.log(event.code);//ArrowUp //ArrowDown //ArrowLeft //ArrowRight
    if(event.code =="ArrowUp"){
        console.log("Character moved UP");
    }
    if(event.code =="ArrowDown"){
        console.log("Character moved Down");
    }
    if(event.code =="ArrowRight"){
        console.log("Character moved Right");
    }
    if(event.code =="ArrowLeft"){
        console.log("Character moved Left");
    }
    

})