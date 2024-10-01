let btns = document.querySelectorAll("button");

function sayhello(){
    console.log("You clicked ?");
    
}

for(btn of btns){
    btn.addEventListener("click",sayhello);
}