let btns = document.querySelectorAll("button");

function sayhello(){
    console.log("You clicked ?");
    
}

for(btn of btns){
    btn.addEventListener("click",sayhello);
}

let div = document.querySelector(".box");
div.addEventListener("mouseenter",()=>{
    console.log("You entered into div");
    
})