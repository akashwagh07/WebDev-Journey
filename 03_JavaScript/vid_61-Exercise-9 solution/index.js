/* create a faulty calculatorusing java script 

This faulty calculator does following :
1. it takes 2 numbers as input from user 
2. it performs wrong operations as follows :
+----> -
*----> +
- ---> /
/ --> **

it performs wrong operations 10% of the times


use -->
a= math.function()
it generates random number between 0 to 1
a<0.1 will be 10% chance to be true 
*/

let random=Math.random()
let a=prompt("Enter first number:");
let c=prompt("Enter Operation :");
let b=prompt("Enter second number:");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1){
    //perform correct calculation
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // perform wrong calculations
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
