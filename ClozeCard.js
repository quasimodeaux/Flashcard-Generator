var ClozeCard = function(text, cloze) {


    this.cloze = cloze;
    this.fulltext = text;

    // Was supposed to be a trick where replace would replace the text that matches cloze with "..." but doesn't show up in main.js
    this.partial = text.replace(cloze, "...");

};




module.exports = ClozeCard;