/*
    Title: Homework Assingment 4
    Course: Pirple - Keeping Up With the Javascripts: ES6
    Author: jzauneggger
    Date: November 1st, 2020
    About: This is the third homework assignment, meant for use to gain experience using if
        statements and conditional logic.
    Notes: I am using Visual Studio Code in Ubnutu using the Bash Terminal and NodeJS has a JS runtime.
    Run: 'nodejs variables.js' to run this code
*/

// Initalize Variables
let men = ["Jackson", "Socrates"];

// Function that takes in a name, and checks if the name 
// is in the list of men.
function checkIfMan(name){
    for(var i=0; i<men.length; i++){
        if(name === men[i]){
            return true;
        }
    }
    
    return false;
}


// Function that checks if the type of cake is valid
function checkCake(type){
    if(type == "Chocolate"){
        console.log("The cake is chocolate.");
    }
    else if(type == "Vanilla"){
        console.log("The cake is vanilla.");
    }
    else{
        console.log("The cake is neither choclate or vanilla.");
    }
}


// Check if Socrates is a Mana
if(checkIfMan("Socrates")){
    console.log("Socrates is a man, and is mortal.")
}   
else{
    console.log("The person is not a man, and could be immortal.")
}

// Check the type of cake
checkCake("Chocolate");





