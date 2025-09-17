console.log("I am a tutorial on loops");

let a=1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i  = 0; i < 100; i++) {
//     console.log(a+i)
// }

let obj={
    name: "Akash",
    role: "student",
    university:"DYPCET"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key)
}

for (const c of "harry"){
    console.log(c)
}


// let i=0;
// while(i<6){
//     console.log(i);
//     i+=1;
// }


let i=10;
do{
    console.log(i)
    i++;
}while(i<6);