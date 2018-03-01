// score variables
var wins = 0;
var losses = 0;

// hangman object
var hangman = {
    words: ["Thailand",
    "India",
    "Egypt",
    "Croatia",
    "Iceland",
    "Boliva",
    "Namibia",
    "Botswana",
    "South Korea",
    "Japan",
    "Djibouti",
    "Kiribati",
    "Rwanda",
    "Tajikistan",
    "Norway",
    "Uzbekistan",
],

letters: ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

guesses: 10,
userGuesses: [],
userGuess: "",

}

 
 var word = words[Math.floor(Math.random() * words.length)];
    

 var answer = [];
     for (var i = 0; i < word.length; i++) {
         answer[i] = "_";
     }
