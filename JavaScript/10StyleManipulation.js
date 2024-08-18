//Accessing heading
let heading = document.querySelector("h3")

//Dsiplaying its all style property
heading.style;

//Setting its color
heading.style.color="blue";

//background color
heading.style.backgroundColor="yellow";


//changing color of multiple objects
//Accesing anchorTags of pubInfo

let links = document.querySelectorAll(".pubInfo a")
//a list is obtained
for(let i = 0;i<links.length;i++){
    links[i].style.color="yellow";
}
