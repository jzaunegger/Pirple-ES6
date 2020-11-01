# If Statements and Conditional Logic
* If Statements allow us to make decisions based on the Truth or Falsey values of   variables. They use conditional logic between variables to determine if something is true or false. They can be nested and also allow developers to use elseif and else.

* Example
```javascript
    var x = 0;
    var y = 1;

    if(x < y){
        console.log("X is Less Than Y");
    }
    else if(x === y){
        console.log("X is Equal To Y");
    }
    else{
        console.log("Y is Less Than X");
    }

```

## Conditional Comparison Operators
* <         : Less Then
* <=        : Less Then or Equal To
* ==        : Equality Operator (Checks with type conversion)
* ===       : Identity Operator (Does not check the type)
* >=        : Greater Then or Equal To
* >         : Greater Then
* &&        : And Operation
* ||        : Or Operation
* !=        : Not Equal To (Checks with type conversion)
* !==       : Not Equal To (Does Not Check type)