//  removeDuplicates([1,1,2,2,3]) -> [1,2,3]

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

console.log(findMax([1, 5, 3, 9, 2]), findMax([-1, -5, -3, -2])
, findMax([100, 200, 50, 300, 250])); 