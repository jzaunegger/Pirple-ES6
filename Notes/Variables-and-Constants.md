# Variables and Constants

## Variables
* A variable is a very basic data structure that holds some sort of data or information. Variables allow you to save and reuse data an infinite number of times throughout the program. You can manipulate or over-write the assigned value in the variable. A variable has the ability to change. You use the "var" keyword to create a variable. You then assign a variable to it using an = sign. Variables can be any data type such as integer, float, string, char, boolean, array, or object. Variable names can not be reserved words such as true, false, String, Integer, or other built in components of JavaScript. Variable names can also not be just pure numbers, variable names may contain numbers in them but they cannot start with numbers or have the whole thing be numbers. Variable names are also case sensitive and must be unique in order to be different variables. Variable names can also contain special characters like _ or $. 

* NOTE: "var" is the ES5 way of doing things, ES6 uses the keyword "let" as seen below.

```javascript
    var name = "Jackson";
    var age = 23;
    var name2 = "Whitney";
```

## Let 
* The ES6 way of declaring variables are very focused on scope. In JavaScript you always have access to variables anywhere in the code, even if it doesn't make sense that you should. If you are in the same scope (like in a function where a variable was declared), the variable name is accessible. The only time it is not valid, is if you leave that scope, like trying to access a variable created in a function in the global space. So it is generally a good idea to limit the scope of each variable name as much as possible. 

* To combat this issue, ES6 implemented "let". Let is scoped to the codeblock, not the local scope. In the example function below, the variable name is limited to the scope of the if statement, and the value is inaccessible anywhere else in the code. Let is much more strict than var.

```javascript
    isValid = true;

    if(isValid === true){
        let name = "Jackson";
    }
```

* Let does not need to be explicitly assigned at instatantion, which allows for block level assignment. Shown in the example below. 

```javascript
    let value;
    let isValid = true;

    if(isValid === true){
        value = 0;
    }
    else{
        value = 1;
    }
```

## Constants
* A constant is a type of variable that is declared (Generally at the beginning of the program, in a global space) but can not be re-assigned. Constants are also block scoped much like let. Constants must always be explicitly assigned a value at instantiation. While constants cannot be reassigned, the data in them can be manipulated.

```javascript
    // Examples of Constant Declaration
    const PI = 3.14159;
    const gravity = -9.8;
    
    // Example of Constant Manipulation
    const myArr = [1, 2, 3];
    myArr.push(4);
```