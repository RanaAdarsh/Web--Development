//accessing image
let img = document.querySelector("img");

//gettings its Attribute "id " value
let id = img.getAttribute("id");
//setting its value
img.setAttribute("id" , "Spidermanhai");
console.log(img.id);

//changing image source
let src = img.getAttribute("src");
img.setAttribute("src","/Javascript/6DomNavigation/Assets/Amazing-spiderman.jpg");
