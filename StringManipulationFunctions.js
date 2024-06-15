/*String Manipulation Functions:

1. Reverse a String: Write a function that reverses a given string.
2. Count Characters: Create a function that counts the number of characters in a string.
3. Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence. */

function reverseString(str){
    let reversestr="";
    for(let i = str.length - 1; i >= 0; i--){
        reversestr = reversestr+str[i];
    }
    return reversestr;
}

function countCharacters(str){
    //return str.length; //This is the easiest way to count characters in a string
    let count = 0;
    for(char in str){
       count++;
    }
    return count;
}

function capitalizeWords(str){

    let words = str.split(" ");
    let word = "";
    let capitalchar = "";
    let j = 0;   
    
    for (word of words){
        for (i of word){
            capitalchar = word[0].toUpperCase();
            word = capitalchar + word.slice(1);
            words[j] = word;
            j++;
            break;
        } 
    }
    return(words.join(" "));
}

let str = "hello World! my name is John Doe. of course, I am a developer.";
console.log(`The Reverse a String: ${str} is : ${reverseString(str)}`);
console.log(`The Count Characters: ${str} is : ${countCharacters(str)}`);
console.log(`The Capitalize Words: ${str} is : ${capitalizeWords(str)}`);