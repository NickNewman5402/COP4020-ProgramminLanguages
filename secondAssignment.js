/*
Nick Newman
5295926
02/09/2025
Programming Languages 1 -  Dr. Leinecker
JavaScript assignment 1 problem 2
*/

function factorial(n)
{
    if(n == 1)
    {
        return BigInt(n);
    }

    return BigInt(n) * factorial(n - 1);
}

function sumOfDigits(n)
{
    let factorialValue = factorial(n).toString(); // Convert sum VERY BIG NUMBER array(158) to string
    let sum = 0;
    
    for (let i = 0; i < factorialValue.length; i++) //for 100! length == 158
    {
        sum += parseInt(factorialValue[i]); // Treating the string as an array and going through each value. Parseint is turning char to int
    }

    return sum;
}

const n = 100;
console.log("The sum of digits in the resulting product of " + n + "! is " + sumOfDigits(n));