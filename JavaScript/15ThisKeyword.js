let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(this);
    
})



let p = document.querySelector("p")
let h = document.querySelector("h1")
let div = document.querySelector("div")

function changeColor(){
    console.log(this.innerText);
    this.style.background="blue";
}
p.addEventListener("click", changeColor);
h.addEventListener("click", changeColor);
div.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);
