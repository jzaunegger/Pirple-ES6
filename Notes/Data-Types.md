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
    * +"10"E

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


## Arrays