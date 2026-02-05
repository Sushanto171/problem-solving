//  removeDuplicates([1,1,2,2,3]) -> [1,2,3]

import { getFullNames } from "./senior";

function removeDuplicates(arr) {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
 	if (!result.includes(arr[i])) {
   	result.push(arr[i]);
 	}
   }
   return result;
 }

//  console.log(removeDuplicates([1, 1, 2, 2, 3]));


 function hasValue(arr, target) {
   return arr.indexOf(target) !== -1;
 }

//  console.log(hasValue(["a","b","c"], "b"));
//  console.log(hasValue(["a","b","c"], "d"));

function last(arr) {
   return arr[arr.length-1];
 }

//  console.log(last([10, 20, 30]));

// Expected: countFreq(["a","b","a"]) -> { a: 2, b: 1 }

function countFreq(arr) {
   const freq = {};
   for (const item of arr) {
    // console.log(item,freq)
 	freq[item] = freq[item]+ 1;
   }
   return freq;
 }

//  console.log(countFreq(["a","b","a"]))

// console.log(obj.a = obj.a +1 )



function findMax(arr) {
    let max = arr[0]

    // built in method
    // arr.forEach(num => {
    //   if(num > max){
    //     max = num
    //   }
    // });

    //without built in method 
    // for(let i = 0;i < arr.length ; i ++){
    //   if(arr[i]> max){
    //     max = arr[i]
    //   }
    // }

    // return max

    return arr.reduce((max, current )=>current > max? current: max ,arr[0])

}

// console.log(findMax([1, 5, 3, 9, 2]), findMax([-1, -5, -3, -2])
// , findMax([100, 200, 50, 300, 250])); 

// Problem 1: Square all numbers
const nums = [2, 4, 6, 8];
// Expected: [4, 16, 36, 64]

function square(arr){
// way 1
 return arr.map((n)=> n * n)

// way 2
// const values = []
// for(let i = 0; i < arr.length; i++){
//   values.push(arr[i] * arr[i])
// }
// return values
}

// console.log(square(nums));

// Problem 2: Get full names
const users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" }
];
// Expected: ["John Doe", "Jane Smith"]

function fullName(users){
  return users.map(user=> user.firstName + " "+ user.lastName)
}

// console.log(fullName(users));

// Problem 3: Convert Celsius to Fahrenheit
const celsius = [0, 10, 20, 30];
// Formula: (C * 9/5) + 32
// Expected: [32, 50, 68, 86]

function celsiusToFahrenheit (arr){
  return arr.map(n=> (n * 9/5 ) +32 )
}

// console.log(celsiusToFahrenheit(celsius));

// Problem 4: Add index to each item
const fruits = ["apple", "banana", "orange"];
// Expected: ["1. apple", "2. banana", "3. orange"]

function addIndex (arr){
  return arr.map((item, i)=> `${++i}. ${item}`)
}

// console.log(addIndex(fruits));

console.log( getFullNames());

