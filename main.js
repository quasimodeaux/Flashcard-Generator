/**
 * Created by blev on 6/21/2017.
 */
// Main js for user input.

//Bring in requirements/initialize
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


//Array for final cards. Was thinking three arrays would work but will try one for now.
var cards =[];


// Count is for number of flashcards being generated
var count = 0;

//User prompted for Generator input
inquirer.prompt([
    {
        name: "generator",
        message: "Basic or Cloze?"
    }
]).then(function(response) {


 //run Basic Flashcard Generator if user input
    if (response.generator === 'Basic'){

        inquirer.prompt([
            {
                name: "number",
                message: "How many cards?"
            },
            {
                name: "front",
                message: "What is the question?"
            }, {
                name: "back",
                message: "What is your answer?"
            }
        ]).then(function(answers) {
             // Creates new card using User Input
            var newGuy = new BasicCard(answers.front, answers.back);

            // Pushes card info to array as arr[i] and arr[i+1]
            cards.push(answers.front, answers.back);

            console.log(newGuy);
            console.log(cards);
        });

    }

// run Cloze Flashcard Generator if specified.
    else if (response.generator === 'Cloze'){
        inquirer.prompt([
            {
                name: "fulltext",
                message: "What is the full text?"
            }, {
                name: "cloze",
                message: "What is your cloze?"
            }
        ]).then(function(answers) {

            var newGuy = new BasicCard(answers.fulltext, answers.cloze);
            cards.push(answers.fulltext, answers.cloze);


            // Log out info
            console.log(newGuy);
            console.log(cards);

            // Need to bring this to global scope somehow
            console.log(ClozeCard.cloze);
            console.log(ClozeCard.fulltext);
            console.log(ClozeCard.partial);
        });


    };
});



