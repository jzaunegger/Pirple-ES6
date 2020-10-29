/*
    Title: Homework Assingment 2
    Course: Pirple - Keeping Up With the Javascripts: ES6
    Author: jzauneggger
    Date: October 29th, 2020
    About: This is the second homework assignment for the ES6 course. We are expected to explain the
        differences between let, const, and var as well as create examples and explain use cases for each.
    Notes: I am using Visual Studio Code in Ubnutu using the Bash Terminal and NodeJS has a JS runtime.
    Run: 'nodejs variables.js' to run this code
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    HOISTING

    Description:
        Hoisting is JavaScripts process of moving variable declarations to the top of the scope they are created in,
        even if the variable has not officially been created yet. For example saying "x=5" is perfectly valid, even
        though we haved said "var x;" anywhere else in the code yet. JavaScript becomes aware of the variable but remains
        uninitalized and cannot be used until the variable has been declared. This is not a process the developer has to do
        and is done automatically be JavaScript. To avoid declaration issues, it is generally a good idea to create all 
        of your variables at the beginning of any code scope to avoid bugs or issues.

*/

// Hoisting Example
console.log("HOISTING Examples -----------------------");
x = 5;
var x;

console.log("X:", x);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    VAR
    Description:
        Variables are basic structures that allow programmers to save and manipulate data in JavaScript.
        Variables can be any data type such as Integers, Floats, Characters, Strings, Booleans, Arrays, or Objects.
        Variables are not dependent on the scope of the code they are written in, and can be attempted to be accessed
        from anywhere. Variables can also have thier value be manipulated or reassigned. They can be named anything
        as long as the name is not a reserved word or doesn't start with a number.

    Use Case:
        Variables are used to define data that may be accessed many places throughout the program. These values
        can also be updated or manipulated. They can be created in a global space to hold a value that may be needed
        throughout a variety of scopes in the program. 
*/

// VAR examples
console.log(" ");
console.log("VAR Examples -----------------------");
var name = "Jackson";
var age = 23;
var nicknames = ["Jack", "Jacks", "J"];

age = 24;

console.log(name, age, nicknames);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    LET
    Description:
        Let is very similar to var, but it was created with ES6 and has much more of a focus on the scope. Let can not 
        be attempted to be accessed if the let variables existing inside of a specific codeblock, this is to combat
        trying to access values that should be inaccessible. Another advantage of using let, is they can be 
        instantiated with no value, and can be assinged later in a different codeblock. LET can be any datatype much
        like VAR.

    Use Case:
        You want to use LET when the scope of where it is being used is something that should be limited. Let is useful
        for ensuring that the variable name you are using can only be accessed 
*/

// LET example
console.log(" ");
console.log("LET Examples -----------------------");
let value;
let isValid = true;

if(isValid){
    value = 1;
    let flag = true;
    console.log("FLAG:", flag);
}
else{
    value = 0;
}

console.log("VALUE:", value);
// console.log(value, flag) - NOTE: Flag is not defined here.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    CONST
    Description:
        CONST or Constants, are types of variables that cannot be reassigned after being created. They data can be maniuplated,
        just no reassigned. Much like LET, CONST is dependent on the scope of the code they are created in. Consts can be any
        data type, just like LET. CONST must be assigned a value when they are created, they can not be created with no value
        unlike LET.

    Use Case:
        Creating variables that are going to be reused over and over again throught the application, that will not be changed.
        Examples include things like PI, Gravity, or E. 
*/

// CONST Examples
console.log(" ");
console.log("CONST Examples -----------------------");

const PI = 3.14159;
const gravity = -9.8;
console.log(PI, gravity);