/*
    Title: Homework Assingment 1
    Course: Pirple - Keeping Up With the Javascripts: ES6
    Author: jzauneggger
    Date: October 26th, 2020
    About: This is the first homework assignment for the ES6 course. It is intended for us
        to get hands on experience using JS to create and Log variables.
    Notes: I am using Visual Studio Code in Ubnutu using the Bash Terminal and NodeJS has a JS runtime.
    Run: 'nodejs app.js' to run this code
*/

// Delcaring Variables
var Song = {
    "Name": "Medicated",
    "Artist": "Wiz Khalifa",
    "FeaturedArtists": ["Chevy Woods", "Juicy J"],
    "Album": "O.N.I.F.C",
    "YearReleased": 2012,
    "Genre": ["Hip Hop", "Rap"],
    "DurationInMinutes": 5.5,
    "IsABop": true
};

// Console Logging Variables
console.log("Song Name:", Song.Name);
console.log("Artist:", Song.Artist);
console.log("Featured Artists:", Song.FeaturedArtists.join(", "));
console.log("Album:", Song.Album);
console.log("Year Released:", Song.YearReleased);
console.log("Genre:", Song.Genre.join(", "));
console.log("Song Duration in Minutes:", Song.DurationInMinutes);
console.log("Is a Bop:", Song.IsABop);