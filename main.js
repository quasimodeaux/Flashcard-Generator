/**
 * Created by blev on 6/21/2017.
 */
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "front",
        message: "What is the question?"
    }, {
        name: "back",
        message: "What is your answer?"
    }
]).then(function(answers) {
    // initializes the variable newguy to be a programmer object which will take
    // in all of the user's answers to the questions above
    var newGuy = new BasicCard(answers.front, answers.back);
    // printInfo method is run to show that the newguy object was successfully created and filled
    console.log(newGuy);
});

