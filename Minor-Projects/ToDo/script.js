let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
button.addEventListener("click", function (event) {
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    if ((input.value == " ") || (input.value == "")) {
        alert("Enter a Text")
    }
    else {
        li.innerText = input.value;
        ul.appendChild(li);
        li.appendChild(delbtn);
    }
    input.value="";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let para = event.target.parentElement;
        para.remove();
        
    }
})