// Page loads, start button appears

// When start button is clicked, page with the following elements appears:

// 30 second counter

// Question with 5 multiple choice responses, each in a radio button

// When radio button is clicked, choice remains clicked, if another radio button is clicked for the same questions, you can only choose radio button one at a time

// If time runs out, message displayed showing correct answers, incorrect answers and unanswered 

// Done button displayed at the bottom of the page that ends the game on user's command

$(document).ready(function() {

    // Here we use jQuery to select the header with "startButton" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("#id|.class|element").on("action", function(){});
    // And so whenever it is clicked...
    $("#startButton").on("click", function() {
      alert("I've been clicked!");
    });

  });
