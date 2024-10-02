let input = document.querySelector("input");
input.addEventListener("input",function(event){
    let para = document.querySelector("p");
    para.innerText = input.value;
})