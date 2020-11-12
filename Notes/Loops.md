# Loops
Loops are structures that allow you to tell the computer to do something a specific number of times. They allow you to loop through data and perform some sort of calculation. Javascript also has several keywords that can be used when it comes to loops and conditional logic.

* break - Executing this command will immediately break out of the loop or conditional statement.
* continue - Executing this command will terminate the current iteration or pass the conditional statement, but continue during the next iteration. 

## While and Do-While
While loops will repeat the code until a specific condition is false. In the example below the loop will continue until the num is equal to 10. D-While work in very similar ways, a codeblock is run (Do), until a condition is met (While).

```javascript
    let num = 0;

    // While Loop
    while(num < 10){
        console.log("Logging", num);
        num += 1;
    }

    // Do-While
    let flag = true;
    do{
        console.log("Running");
        flag = false;

    }
    while(flag)
```

## For Loops
For loops take a given variable that acts as a counter to execute code while some condition is not being met. In the example below the loop will run until i equals 10.
A for loop has the following structure: the variable counter, the exit condition, and the update value. The counter will be automatically updating by the update value after every iteration in the loop has run.

```javascript
    // For Loop
    for(var i=0; i<10; i++){
        console.log(i);
    }
```

# For In
Uses the keywords for and in related to looping. Iterates through values in a arbitrary order, so it is generally only used in objects. 

```javascript
    const users = {
        1: "Jackson", 
        2: "Whitney", 
        3: "Abby"
    };

    // For In Loop
    for(let prop in users){
        console.log(users[prop]);
    }
```

## For Each
For Each loops use a method to iterate through the values in succession. This is best used on an array.

```javascript
    const nums = [1, 2, 3, 4, 5, 6];

    // For Each Loop
    nums.forEach((num) => {
        console.log(num)
    });


```

## For Of
```javascript
    const nums = [1, 2, 3, 4, 5, 6];

    // For Of
    for(let num of nums){
        console.log(num)
    }
```