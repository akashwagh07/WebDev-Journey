function nice(name) {
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " your tshirt is nice!")
    console.log("hey " + name + " your course is nice too!")
}

function sum(a, b, c = 5) {
    // console.log(a+b)
    console.log(a, b, c);
    return a + b + c;
}

console.log("hey akash you are nice!")
console.log("hey akash you are good!")
console.log("hey akash your tshirt is nice!")
console.log("hey akash your repo is nice too!")

nice("harry")
nice("shivam")

result1 = sum(3,5); //prints 8 output
result2 = sum(45);   //output will be nan and value of b undefined
result3 = sum(35, 9, 3);

console.log("sum of these numbers is ", result1)
console.log("sum of these numbers is ", result2)
console.log("sum of these numbers is ", result3)


const func1=(x)=>{
    console.log("I am in an arrow function",x);
}

func1(34);