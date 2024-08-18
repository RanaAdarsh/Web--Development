// Accessing Paragraph with id "para"
let para = document.querySelector("#para");

//displaying its properties
// console.dir(para);


//Accessing and displaying innerHTML
// console.log(para.innerHTML);

//Accessing and displaying innerTEXT
// console.log(para.innerText);


//Accessing and displaying TextContent
// console.log(para.textContent);


//modifying innerText in para
para.innerText = "abc";

para.innerText="Hy i am peter parker."


//Manipulation tags inside para
para.innerHTML='Hy I am <b> Peter Parker</b>.'


//Modifying the Heading h3 without knowing its text

let heading = document.querySelector("h3");
heading.innerHTML=`<u>${heading.innerText}</u>`;
