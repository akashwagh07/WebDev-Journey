console.log("Hello i am conditional tutorial ");

let age = -2;
let grace = 2;

age += grace
console.log(age)

// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if (age > 18) {
    console.log("You can dive");
}
else if (age==18)
{
    console.log("soon you will be driving");
}
else if(age ==0)
{
    console.log("Are you kidding?");
}
else {
    console.log("You cannot drive");
}

a=6;
b=8;

let c = a>b?(a-b):(b-a);
console.log(c)

/*  translates to:
if (a>b){
    let c=a-b;
}
else{
    let c=b-a
}
    */


