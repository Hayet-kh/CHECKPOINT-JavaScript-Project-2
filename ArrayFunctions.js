/*Array Functions:

1. Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
2. Sum of Array: Create a function that calculates the sum of all elements in an array.
3. Filter Array: Implement a function that filters out elements from an array based on a given condition.
*/

function findMax(arr){
    let max=arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
function findMin(arr){
    let min=arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
function sumArray(arr){
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

/* 3. Filter Array: e.g. Filtering Strings Based on Length:
 Filter out all strings in the array that have a length greater than 5 characters.
*/
function filterArray(arr){
    return arr.filter((element)=>element.length<=5);
}


let arr=[1,2,3,4,5,6,7,8,9,10, 300, 50, 700.33, -5, 500, -6.35];
let arr2=["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "jackfruit", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yuzu", "zucchini"];
//console.log(`The Maximum value in the array is: ${findMax(arr)}`);
//console.log(`The Minimum value in the array is: ${findMin(arr)}`);
//console.log(`The Sum of the array is: ${sumArray(arr)}`);
console.log(`The filtered array is: ${filterArray(arr2)}`);