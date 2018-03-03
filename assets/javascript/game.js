//defining variables
//----------------------------


// word bank
var words = ["thailand", "india", "egypt", "croatia", "iceland", "bolivia", "namibia", "botswana", "south korea", "japan", "djibouti", "kiribati", "rwanda", "tajikistan", "norway", "uzbekistan", "germany", "england", "kenya", "ethiopia", "brazil", "peru"];
// randomly selected word
var selectedWord = "";
// number of letters in selected word
var lettersInWord = [];
// number of blanks for selected word
var numberOfBlanks = 0;
// blanks plus correctly guessed letters
var partiallySolved =[];
// incorrrect guesses
var wrongGuesses = [];
// counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 11;
var correct = 0;



// functions
//-----------------------------


// function for running the game
function startGame()
{
	// random word selected from words array
    selectedWord = words[Math.floor(Math.random() * words.length)];
    
	// selected word is split into letters
    lettersInWord = selectedWord.split('');
    
	// number of blanks is determined
	numberOfBlanks = lettersInWord.length;
	
	// game reset
	correct = 0;
	guessesLeft = 11;
	wrongGuesses =[];
	partiallySolved =[];
	letters = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	// creates the blanks
	for(var i = 0; i< numberOfBlanks; i++)
	{
		partiallySolved.push('_');
		document.getElementById('wordToGuess').innerHTML = partiallySolved;
	}

	// updates the HTML 
	document.getElementById('wordToGuess').innerHTML = partiallySolved.join(' ');
	document.getElementById('numberOfGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongGuesses;
}


function compareLetters(userKey)
{
				// if the letter selected is in the word 
				if(selectedWord.indexOf(userKey) > -1)
				{
					// loops to see if multiple blanks have the same letter
					for(var i = 0; i < numberOfBlanks; i++)
					{
						// puts letter into corresponding index of the array
						if(lettersInWord[i] === userKey)
						{
							correct++;
							partiallySolved[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = partiallySolved.join(' ');
						}	
					}
				}
				// incorrect guesses
				else
				{
					wrongGuesses.push(userKey);
					guessesLeft--;
					// updates the HTML
					document.getElementById('numberOfGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongGuesses;
                }
			
			
		
}

// determine a win or loss
function winLose()
{
	// When number blanks if filled with right words then you win
	if(correct === numberOfBlanks)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}

// when the play again button is clicked the reset function sets up a new game
$("#resetButton").on("click", function reset()
{
	
	selectedWord = words[Math.floor(Math.random() * words.length)];
	lettersInWord = selectedWord.split('');
	numberOfBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	correct = 0;
	guessesLeft = 9;
	wrongGuesses =[];
	partiallySolved =[];
	letters = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
})



// initialize game
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < letters.length; i++)
	{	
		if(letterGuessed === letters[i] && test === true)
		{
            // removes letters already chosen so if a duplicate key is pressed it doesnt count as another guess
            var spliceLetters = letters.splice(i,1);

			compareLetters(letterGuessed);
            winLose();
		}
	}		
		
}
