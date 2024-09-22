//AppendChild use
let para = document.createElement("p");
console.dir(para);

para.innerText="I am a new Para.";

//Adding para to the end of body block
let body  = document.querySelector("body");
body.appendChild(para);

//Adding to class pubInfo
let box = document.querySelector(".box");
box.appendChild(para);


//Append Use

para.append("I am appended.")

//Appending a element.
let btn = document.createElement("button");
btn.innerText="Click me!";

para.append(btn);