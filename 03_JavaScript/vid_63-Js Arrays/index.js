let arr = [1, 2, 4, 5, 7]
// index 0,1,2,3,4

let a = "Akash"

a[0] = "m"

// console.log(a)
// console.log(a[0])

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0])
// console.log(arr[2]);
// console.log(arr[4])

console.log(arr.toString()); //array converted in comma separated string

console.log(arr.join(" and ")) //array elements will be joined with and instead of comma's

arr.pop()   //delete and return last element of arr
arr.shift()     //delets and returns arr element at index 0
console.log(arr)

arr.push(100) // adds 100 in array at last
arr.unshift(12)   //adds element 12 at index 0


arr.push("Akash")
console.log(arr)

delete arr[4] //delets element at index 4 but space remains empty as it is and lenght of array remains same
console.log(arr, arr.length)

// a1.concate(a2,a3); concatinates a1,a2 and a3 array together but none of the array actually changes


let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)
r = numbers.splice(2, 3) //returns 3 elements from index 2 and removes those elements from numbers array
console.log(r)
console.log(numbers)


let numbers2 = [1, 2, 3, 4, 5, 6]
r2 = numbers2.splice(2, 3, 22, 333) //returns 3 elements from index 2 and removes those elements from numbers2 array and also returns 22 and 333 at the end in position of removed array elements
console.log(numbers2)

