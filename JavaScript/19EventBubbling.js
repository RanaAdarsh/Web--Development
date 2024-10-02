let div = document.querySelector("div");
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li")

div.addEventListener("click",function(event){
    alert("Div was clicked!");
})

ul.addEventListener("click",function(event){
    event.stopPropagation();
    alert("ul was Clicked!");
})

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        alert("li was Clicked!");
    })
}
