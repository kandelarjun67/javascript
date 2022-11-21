// pop()  -- Remove the last element from the array & return popped element 
let arr1 = [2, 3, 5, 4, 3]

console.log(arr1.pop());    // 3

// push -- added new element to the array & returns new array length

let arr2 = [2, 3, 5, 4, 3]

console.log(arr2.push(2))   // 6

// shift() -- remove the first element from the array and print it
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr3.shift());   // remove first element & return it     // 1

console.log(arr3)       // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// unshift() --- Add new element to beginning of array & returns new array length

let arr4 = [7, 8, 9, 10]

console.log(arr4.length);   // 4

console.log(arr4.unshift(2));      // 5

// sort() -- used to sort an array alphabetically
arr5 = [1, 91, 14, 35, 11, 31, 9, 3]
console.log(arr5.sort());    // [ 1, 11, 14, 3, 31, 35, 9, 91 ]

// splice() -- use to add new items to an array & returns deleted value
// splice (position_to_add, no_of_element_to_remove,elements_to_be_added)
arr6 = [2, 6, 8, 10]
let spliceResult = arr6.splice(1, 1, 5)
console.log(spliceResult)    // 6
console.log(arr6)  // [2,5,8,10];

// slice() -- slice out a pieces from an array, it creates new array & donot effect to original array 
arr7 = [2, 6, 8, 10, 16];
console.log(arr7.slice(0, 2));    // [ 2, 6 ]  
console.log(arr7)   // [ 2, 6, 8, 10, 16 ]

// toString()
let arr8 = [1, 8, 11, 16, 31]
// change to string using toString()
let arr8Result = arr8.toString()  // let arrResult is now string
console.log(arr8Result);     // '1,8,11,16,31'

// join()    -- used to join every item 
let arr9 = [1, 8, 5, 9]
console.log(arr9.join(" and "));

// concat()   --- used to merge array 
let arr10 = [1, 2]
let arr11 = [3, 4, 5]


let newArr11 = arr10.concat(arr11)
console.log(newArr11)      // [ 1, 2, 3, 4, 5 ]