# Functions
* Functions are snippets of code that allow you to repeat code without having to repeat it mulitple times throughout the file. A lot of code is split into functions, as each are generally desgined to do specific things. Front-End Frameworks generally build code and the entire website out of components, which on a abstract level are very similar to functions. ES6 has added a lot of new functionality to functions and thier different types.

* A function will execute code within thier scope. The scope of a function is the code that falls between the {} braces. Functions can invoke other functions allowing code to access other code.

* Functions can be nested inside of one another. This can be called a closure.

* Types of Functions:
    * Traditional Functions
    * Variable Name Functions
    * Closure
    * Arrow Functions 

## Traditional Functions
* These are the most traditional functions in JavaScript. The function "logArgs" takes two arguements and logs them to the console. Pretty simple in execution.

    ```javascript
        // An example function
        function logArgs(arg1, arg2) {

            // Log the two arguements
            console.log(arg1 + " " + arg2);
        }

        // Invoke the function
        logArgs("Say", "Hi!")
    ```

## Variable Name Functions
* Variable Named Functions are just like traditional functions however, they are saved to a a variable (generally a constant), and are sometimes simpler to use inside of nested statements.

    ```javascript
        const personObj = {
            name: "Jackson",
            age: 23,
            gender: "Male"
        };

        // A variable being assigned to a function
        var sayName = function(person=PersonObj){
            if(person.name){
                console.log("Hello", person.name);
            }
            else{
                console.log("Error: No name given.");
            }
        }

        // Invoke the function
        sayName("Jackson")
    ```

## Closure
* A closure is a series of nested functions inside of a parent function. These are generally used for organizing specific functionality in a larger process.

    ```javascript

        // Overall Function
        function squareAndMultiply(num1, num2){
            
            // Sub Function 1
            function squarer(n){
                return n * n;
            }

            // Sub Function 2
            function multiplyBy10(y){
                return y * 10;
            }

            return squarer(num1) * multiplyBy10(num2);
        }

    ```

## Arrow Functions (Fat Arrows)
* An arrow function is a function that is executed immediately instead of needing to be invoked. These are helpful when you have something that requires a callback. A callback is when a function or proceess is expecting some sort of process to be input. Such as the .map or .filter methods for arrays, you would put an arrow function to specifiy functionality.

    ```javascript

        // Define Users
        const users = [
            {name: "Jackson", age:23},
            {name: "James", age:34},
            {name: "Charles", age:46},
            {name: "Hector", age:57}
        ];

        // Map the users
        const userNames = (myArr) => 
            myArr.map((user) => user.name);

        const userAges = myArr.filter((user) => user.age % 2 === 0);
    ```