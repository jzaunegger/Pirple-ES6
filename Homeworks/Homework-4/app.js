/*
    Title: Homework Assingment 4
    Course: Pirple - Keeping Up With the Javascripts: ES6
    Author: jzauneggger
    Date: November 5th, 2020
    About: This is the third homework assignment, meant for use to gain experience writing different 
            types of functions.
    Notes: I am using Visual Studio Code in Ubnutu using the Bash Terminal and NodeJS has a JS runtime.
    Run: 'nodejs app.js' to run this code

            Syllogism 1                                         Syllogism 2
    -----------------------------------             -------------------------------------------        
    1. All men are mortal.                          1. The cake is either vanilla or chocolate.
    2. Socrates is a man.                           2. The cake is not chocolate.
    3. Therefore, Socrates is a mortal.             3. Therefore, the cake is vanilla
*/

// Initalize Variables
let men = ["Jackson", "Socrates"];

const determineIfMan = (inputName, inputList) => {
    let returnVal = false;
    let matchFound = false;

    // Check if the input if a string
    if(typeof(inputName) != "string"){
        console.log("No valid arguement was given.");
        return false;
    }

    // Iterate through the names
    inputList.forEach((man) => {
        // Check if the input matches a name
        if(man === inputName){
            returnVal = true;
            matchFound = true;
        }
    });

    // Return False if the name is not known
    if(matchFound){
        console.log(inputName, "is a known man.")
        return true;
    }
    else{
        console.log(inputName, "is a unknown man.")
        return false;
    }
}


console.log(determineIfMan(3.14, men));