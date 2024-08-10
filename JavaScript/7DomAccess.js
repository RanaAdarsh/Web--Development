//Selecting element by id
let para  = document.getElementById("para");
console.log(para);


//Selecting Element by className
let box = document.getElementsByClassName("box");
console.log(box);


//Selecting Element by TagName
let div = document.getElementsByTagName("div");
console.log(div);

//Using QuerySelector

//Selecting element by id using QuerySelector
let qid = document.querySelector("#para");
console.log(qid);


//by class Name
let qclass = document.querySelector(".box");
console.log(qclass);


//by tag name
let qtag = document.querySelector("p");
console.log(qtag);

//selectig all element
let qall = document.querySelectorAll("div");
console.log(qall);