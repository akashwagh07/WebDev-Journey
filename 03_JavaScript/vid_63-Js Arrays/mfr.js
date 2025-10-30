// Map , Filter and Reduce


let arr = [1, 13, 5, 7, 11]
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);  //array containing squares of arr elements
// }

//value,index,arr
let newarr = arr.map((e, index, arr) => {
    return e ** 2
})
console.log(newarr);

console.log(newarr)
const greaterThanSeven = (e) => { //an constant which is a function also
    if (e > 7) {
        return true
    }
    return false
}
console.log(newarr.filter(greaterThanSeven))
console.log(arr.filter(greaterThanSeven))

let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
    return a + b
}

console.log(arr2.reduce(red)); //will multiply first two elements of array then multiply the product with 3rd element and so on and final product wil be returned

// let Array
// Array.from("Akash")
// console.log(Array)