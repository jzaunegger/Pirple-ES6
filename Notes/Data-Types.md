# Data Types
* Data Types are the fundamental types of information that your program will use and interact with.
* If you need to figure out what data type a variable is set to you can use the key-word "typeof" and it will return the data type you are using. 

* undefined means that a variable is not assigned a value and has no type.
* null means that something intentionally does not exist. 
* NaN means that something is Not a Number. This can be seen when trying to preform mathematical operations on things like strings, arrays, objects, or boolean values. 

## Numbers and Strings
* Numbers are any types of numbers. Integers, Doubles, or Floats. Integers are whole numbers such as 1, 100, or 10,000. Doubles and Floats are both numbers with decimal place values. The difference is how many decimal place values the variable can hold. Floats can hold 32 bits of data, whereas doubles can hold 64 bits.

* Converting Strings to Numbers
    * parseInt
    * +"10"

* Strings are sequences or a series of Unicode characters. They can be wrapped in single or double quotes.

* Basic string Functions
    * .length - Returns the length of the string
    * .charAt(index) - Returns the value of the character at the given index.
    * str1 + str2 - Concatentates the two strings together, concatentates without spaces unless specifically denoted.
    * .toUpperCase() - Convert all characters to uppercase.
    * .toLowerCase() - Convert all characters to lowercase.

## Booleans
* Booleans are true or false values. Generally used for evaluating conditions.
* You can manually check how a variable evaluates using the keyword Boolean(variable).
* Everything can be evaluated as a truthy or falsey value. Essentially what this means, is that everything in JavaScript can be evaluated to a true or false value. 

## Objects
* An object is a collection of name value pairs. Also known has a hash table or dictionary. You can create files of objects also known as JavaScript Object Notation or JSON. All objects in JS follow the JSON convention. JSON is a very common way of creating and sharing objects, and a lot of languages have tools or functions to read and write from JSON files. A great thing about Objects is that the keys do not have to be just strings, but they can also be integer indexes. Keys can also be any valid JS data type, including other objects or arrays. 

* Objects keys can also have values of functions explicitly defined in the object itself. 

* Note: Keys should always be unique, unless the same key lies in a nested object. Otherwise JS can get confused and will ignore duplicate keys. 

* An example would be something like the following.

`
    var object1 = 
    {
        "name": "Jackson",
        "age": 23,
        "address": {
            "line1": "123 Fake Street",
            "line2": "Apartment 5",
            "zip": 12345
        }
        sayName: function(){
            console.log(this.name);
        }
    };
`

`
    var object2 = new Object();
    object2['name'] = "Jackson";
    object2['age'] = 23;
`

* You can extract the value from a key using the following: 
    * object1.name 
    * object1['name']
    * object1.address['line1']
    * object1.address.line1

* You can also use OOP style of creating objects using funcitons
`
    function Person(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        // Function to display the persons name
        this.sayName = function(){
            console.log(this.firstName + " " + this.lastName)
        }
    }

    var person = new Person("Jackson", "Zaunegger", 23);
`


## Arrays
* Arrays are essentially iterable lists of data. They hold mulitple values of a type of data in a single variable. They are a fancy type of Object in a certain sense. They are denoted with [] instead of {}. Arrays do not have to have every index be the same type of data. Arrays use indecies to extract data from them, instead of keys. 

* Example:
`
    var array1 = [1, 2, 3, ["A", "B", "C"]];
`
`
    var array2 = new Array();
    array2[0] = "Hello";
    array2[1] = "Jackson";
`
* Extracting Data 
    * array1[0] -> 1
    * array1[3][1] -> A

* Basic Array Functions
    * .length               -> Returns the length of the array.
    * .push(entry)          -> Adds a new entry to the end of the array. (You can push multiple entries, or another array, or even an object.)
    * .pop()                -> Removes the last entry in the array. (Can also be used to extract the last index)
    * .sort()               -> Sorts the array by A-Z unless a different method is given.
    * .reverse()            -> Reverses the order of the array.
    * .concat()             -> Concatenates arrays together into one array.
    * .slice(start, stop)   -> Returns an array based on the inputs.
    * .join(delimter)       -> Turns an array into a single string, using the input as a value inbetween array entries.
