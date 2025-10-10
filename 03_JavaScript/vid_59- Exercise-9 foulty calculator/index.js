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

let a= Math.random();

let num1=prompt("Enter first number:")
let num2=prompt("Enter second number:")

let choice=prompt("1.Addition\n2.subtraction\n3.multiplication\n4.division\nEnter your choice:")

if(a>0.1){
    if(choice==1){
        console.log(num1*1+num2*1)
    }
    else if(choice==2){
        console.log(num1-num2)
    }
    else if(choice==3){
        console.log(num1*num2)
    }
    else if(choice==4){
        console.log(num1/num2)
    }
    else{
        console.log("Invalid choice..!!")
    }
}
else {
    
    if(choice==1){
        console.log(num1-num2)
    }
    else if(choice==2){
        console.log(num1/num2)
    }
    else if(choice==3){
        console.log(num1*1+num2*1)
    }
    else if(choice==4){
        console.log(num1**num2)
    }
    else{
        console.log("Invalid Choice..!!")
    }
}