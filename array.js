// An array is an object that can store multiple values at once 

const arr = ['Arjun', 'Bhim', 'Dharmaraj', 'Nakula', 'Sahadeva'];

console.log(arr)  // prints array i.e  [ 'Arjun', 'Bhim', 'Dharmaraj', 'Nakula', 'Sahadeva' ]
console.log(arr.length); // prints 5

console.log(arr.pop());   // remove the last element  i.e prints 'Sahadeva'

console.log(arr.splice(2, 1));    // splice(start,remove Count, new count) prints [ 'Dharmaraj' ]


// multiply the array element by 2 using map
let numbers = [1, 2, 3, 4, 5]
let result = numbers.map(x => x * 2);
console.log(result);    // [ 2, 4, 6, 8, 10 ]

// sum using map
let arr2 = [1, 2, 3, 4, 5]
let sum = 0;
arr2.map((x => {
    sum += x;    // sum = sum+item   
}));
console.log(sum);   // 15

// by using reduce
arr2 = [1, 2, 3, 4, 5]
arr2.reduce((accu, currentValue) => {
    return accu + currentValue;   // 15 i.e sum upto 5
});
