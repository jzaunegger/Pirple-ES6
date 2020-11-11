/*
    Title: Homework Assingment 5
    Course: Pirple - Keeping Up With the Javascripts: ES6
    Author: jzauneggger
    Date: November 5th, 2020
    About: This is the fifth homework assingment, meant to get hands on experience creating and using
            switch statements in JS.
    Notes: I am using Visual Studio Code in Ubnutu using the Bash Terminal and NodeJS has a JS runtime.
    Run: 'nodejs app.js' to run this code
*/


// Time adder function
function timeAdder(value1, label1, value2, label2){

    var acceptableLabels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"] ;
    var pluralLabels = ["seconds", "minutes", "hours", "days"];
    var singularLabels = ["second", "minute", "hour", "day"];

    var label1IsValid = false;
    var label2IsValid = false;

    // Check that the values are both numbers
    if(typeof(value1) == "number" && typeof(value2) == "number"){

        // Check that the labels are valid
        for(var i=0; i<acceptableLabels.length; i++){
            if(label1 == acceptableLabels[i]){
                label1IsValid = true;
            }

            if(label2 == acceptableLabels[i]){
                label2IsValid = true;
            }
        }

        // Process the times
        if(label1IsValid && label2IsValid){

            // Process Inputs
            var timeInSecs = 0;
            timeInSecs += processInput(value1, label1);
            timeInSecs += processInput(value2, label2);

            // Calculate Output
            var output = convertToOutput(timeInSecs)
            console.log("Output:", output)
        }
        else{
            console.log("At least one of the given labels was not valid.")
        }
    }
    else{
        console.log("At least one of the given values was not valid.")
    }
}

// Process Input1 and Label1
function processInput(value, label){
    var timeInSeconds = 0;

    console.log("Processing Input:", value, label)

    switch(label){

        // Plural Cases
        ////////////////////////////////////////////////////////////////////////////////
        // Process Seconds
        case "seconds":
            // Log if value needs a singular value
            if(value <= 1 || value > 59){
                console.log("The input value does not match the label.");
                console.log("Seconds should be > 1 and < 59");
            }
            else{
                timeInSeconds  = value;
            }
            break;

        // Process Mintues
        case "minutes":
            // Log if value needs a singular value
            if(value <= 1 || value > 59){
                console.log("The input value does not match the label.");
                console.log("Minutes should be > 1 and < 59");
            }
            else{
                timeInSeconds = (60 * value);
            }
            break;

        // Process Seconds
        case "hours":
            // Log if value needs a singular value
            if(value <= 1 || value > 24){
                console.log("The input value does not match the label.");
                console.log("Hours should be > 1 and < 23");
            }
            else{
                timeInSeconds = (60 * (60 * value));
            }
            break;

        // Process Days
        case "days":
            // Log if value needs a singular value
            if(value <= 1){
                console.log("The input value does not match the label.");
                console.log("Days should be > 1");
            }
            else{
                timeInSeconds = (((value * 24) * 60) * 60);
            }
            break;

        
        // Si Cases
        ////////////////////////////////////////////////////////////////////////////////
        // Process Second
        case "second":
            // Log if value is a plural value
            if(value > 1 || value < 0){
                console.log("The input value does not match the label.");
                console.log("Second should be 1");
            }
            else{
                timeInSeconds = value;
            }
            break;

        // Process Second
        case "minute":
            // Log if value is a plural value
            if(value > 1 || value < 0){
                console.log("The input value does not match the label.");
                console.log("Minute should be 1");
            }
            else{
                timeInSeconds = (value * 60);
            }
            break;

        // Process Hour
        case "hour":
            // Log if value is a plural value
            if(value > 1 || value < 0){
                console.log("The input value does not match the label.");
                console.log("Hour should be 1");
            }
            else{
                timeInSeconds = (value * 60) * 60;
            }
            break;

        // Process Day
        case "day":
            // Log if value is a plural value
            if(value > 1 || value < 0){
                console.log("The input value does not match the label.");
                console.log("Day should be 1")
            }
            else{
                timeInSeconds = (((value * 24) * 60) * 60);
            }
            break;
    }

    return timeInSeconds;
}

function convertToOutput(timeValue){
    var output = [null, null];

    // Check if seconds can convert to minutes, log minutes
    if(timeValue % 60 == 0){
        var mins = timeValue / 60;

        // Check if minutes can convert to hours, log hours
        if(mins % 60 == 0){
            var hours = mins / 60;

            // Check if hours can convert to days, log days
            if(hours % 24 == 0){
                var days = hours / 24;
                output[0] = days;

                if(days > 1){
                    output[1] = "Days";
                }
                else if(days <= 1){
                    output[1] = "Day"
                }
            }

            // Log as Hours
            else{
                output[0] = hours;

                if(hours > 1){
                    output[1] = "Hours";
                }
                else if(hours <= 1){
                    output[1] = "Hour"
                }
            }
        }
        // Log as Minutes
        else{
            output[0] = mins;
            if(mins > 1){
                output[1] = "Minutes";
            }
            else if(mins <= 1){
                output[1] = "Minute"
            }
        }
    }

    // Log As Seconds
    else{
        output[0] = timeValue;
        
        if(timeValue > 1){
            output[1] = "Seconds";
        }
        else if(timeValue <= 1){
            output[1] = "Second";
        } 
    }

    return output;
}


// Call Time Adder Function
timeAdder(1, "minute", 240, "seconds")