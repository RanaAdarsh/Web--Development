//Accessing all the class of an Object
let pub = document.querySelector(".pubInfo");
pub.classList;

//Accessing class of Heading h3
let head = document.querySelector("h3");
head.classList;

//Adding a new class to heading 
//green class se styling already set h , jisme v add hogi green class uski stylling set ho jayegi
head.classList.add("green");


//remove a class
head.classList.remove("green");

//to check if classExists
console.log(head.classList.contains("green"));

//to toggle between add & remove { agr hai to remove ho jaye , agr ni hai to add ho jaye .}

head.classList.toggle("yellowbg");//Adds yellowbg class
head.classList.toggle("green");// Adds green class


head.classList.toggle("green") //removes green class

