// if statement
var age = 15;
if(10<age<20){
    console.log("Age is between 10 and 20")
}

//if-else statement
var num = 36;
if(num%2==0 && num%3==0){
    console.log(num+" is divisible by 2 and 3");
}
else{
    console.log(num+" is not divisible by 2 and 3");
}

//else-if statement

var n = 33;
if(n%2==0){
    console.log(n+" is divisible by 2");
}
else if(n%3==0){
    console.log(n+" is divisible by 3");
}
else{
    console.log(num +" is not divisible by both 2 and 3");
}

let c = 2;
switch(c){
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
        break;
    default:
        console.log("default case");
}