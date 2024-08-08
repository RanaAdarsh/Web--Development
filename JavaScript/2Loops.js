//for loop
for(let i=0;i<10;i++){
    console.log(i);
}

//for-in loop
let obj={
    name:"Adarsh",
    age:22,
    mob:9026487181,
}
for (const key in obj) {
        const element = obj[key];
        console.log(element)
}

//for-of loop
for (const c of "Adarsh") {
    console.log(c);
}

//while loop
let i = 0;
while(i<6){
    console.log(i);
    i++;
}

//do-while loop
let x = 3
do{
    console.log(x)
    x++
}while(x<10)