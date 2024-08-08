function greet(name){
    console.log("Hey "+name+" ,Good Afternon!");
    console.log("Have a nice day , Mr. "+name);
}

// greet("Adarsh");
// greet("Satyam");

const sum=(a,b)=>{
    let c = a+b;
    return c;
}

result = sum(3,5)
console.log(result);

function func1(a,b,c=1){
    let d = a+b+c;
    return d;
}

result = func1(3,5);
console.log(result);
