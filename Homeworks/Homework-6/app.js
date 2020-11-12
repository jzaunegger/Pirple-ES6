/*
    Title: Homework Assingment 6
    Course: Pirple - Keeping Up With the Javascripts: ES6
    Author: jzauneggger
    Date: November 12th, 2020
    About: This is the fifth homework assingment, meant to get hands on experience creating and using
            various types of loops in JS.

    Notes: I am using Visual Studio Code in Ubnutu using the Bash Terminal and NodeJS has a JS runtime.
    Run: 'nodejs app.js' to run this code
*/


// Function to check if prime
function checkIfPrime(value){

    // Ignore if the value is 1
    if(value === 1){
        return false;
    }

    // If the value is 2
    else if(value === 2){
        return true
    }

    // Check on values > 2
    else{
        for(var i=2; i<value; i++){
            
            // Check for factors
            if(value % i === 0){
                return false;
            }
        }
        return true;
    }
}


// Print Nums
for(var i=1; i<101; i++){

    // Check if the number is prime
    if(checkIfPrime(i)){
        console.log("Prime");
        continue;
    }

    // Check for FizzBuzz
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        continue;
    }
    
    // Check for Fizz
    if(i % 3 == 0){
        console.log("Fizz");
        continue;
    }

    // Check for Buzz
    if(i % 5 == 0){
        console.log("Buzz");
        continue;
    }

    // Log Number
    console.log(i);
}