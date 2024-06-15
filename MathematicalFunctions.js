/*Mathematical Functions:

1. Factorial: Write a function to calculate the factorial of a given number.
2. Prime Number Check: Create a function to check if a number is prime or not.
3. Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
*/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function fibonacci(n) {
    let fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

let n = 89;
let n1 = 10;

console.log(`The Factorial of ${n} is : ${factorial(n)}`);
console.log(`Is ${n} a Prime Number? : ${isPrime(n)}`);
console.log(`The Fibonacci Sequence of ${n} is : ${fibonacci(n)} \n`);

console.log(`The Factorial of ${n1} is : ${factorial(n1)}`);
console.log(`Is ${n1} a Prime Number? : ${isPrime(n1)}`);
console.log(`The Fibonacci Sequence of ${n1} is : ${fibonacci(n1)}\n`);