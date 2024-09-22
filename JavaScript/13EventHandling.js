let btn = document.querySelector("button");


btn.onclick= function(){
    alert("Button was clicked!")
}

function sayhello(){
    console.log("Button is clicked!");
}

btn.onclick=sayhello;