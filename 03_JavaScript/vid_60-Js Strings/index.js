console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);

let realname = "harry";
let friend = "Rohan";

console.log("His name is " + realname + " and his friends name is " + friend);
console.log(`His name is ${realname} and his friends name is ${friend}`)

// a="Roh"an";
// this will show error as compilor does not understand where is string ended in this case escape sequence is used 

let m = "Roh\"an"
// this is usage of escape sequence it will print - Roh"an

let n = `Roho"an`
// this method can be also used instead of escape sequence

console.log(a.toUpperCase())
console.log(a.toLowerCase())

console.log(a.slice(1, 4))

let b = "shivam";
console.log(b.replace("sh", "77"));
console.log(b);

console.log(b.concat(a, "Akshay", "Kumar"));

let r = "    Akash W"
let wr = r.trim() //removes void spaces at start and end of string

console.log(wr)

// In inspect --> console by declaring any string and using . operator learn different new functions like b.indexOf or b.charAt etc.