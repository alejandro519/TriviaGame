// Page loads, start button appears

// When start button is clicked, page with the following elements appears:

// 30 second countdown timer that starts to countdown

// Questions with 5 multiple choice responses, each response with a corresponding radio button

// When radio button is clicked, choice remains clicked, if another radio button is clicked for the same questions, you can only choose radio button one at a time

// If time runs out, message displayed showing correct answers, incorrect answers and unanswered 

// Done button displayed at the bottom of the page that ends the game on user's command

let counter = 8;
// var correctAns = 0;
// var incorrectAns = 0;
// var unanswered = 0;
var timer;
var intId;
var questions = [
  {
    question: "Back to the Future takes place in which fictional California town?",
    choices: ["Hidden Hills", "Hawthorne", "University Heights", "Rancho Cucamonga", "Hill Valley"],
    answer: "Hill Valley"
  },
  {
    question: "The time machine in Back to the Future is built from a modified: ",
    choices: ["Mercedes Benz", "Alfa Romeo", "DeLorean", "Lamborghini", "Refrigerator"],
    answer: "DeLorean"
  },
  {
    question: "On what date did Doc Brown invent time travel?",
    choices: ["November 5, 1955", "December 5, 1945", "April 5, 1965", "May 19, 1980", "January 1, 1975"],
    answer: "November 5, 1955"
  },
  {
    question: "How much electricity needs to be generated to power the time machine?",
    choices: ["121 megawatts", "1000 joules", "1.21 gigawatts", "1000 kilowatts", "21 watts"],
    answer: "1.21 gigawatts"
  },
  {
    question: "The radioactive chemical element used to power the time machine in 1985 is:",
    choices: ["Palladium", "Potassium", "Polonium", "Promethium", "Plutonium"],
    answer: "Plutonium"
  },
  {
    question: "What is the name of Doc Brown's dog?",
    choices: ["Watson", "Einstein", "Newton", "Edison", "Aristotle"],
    answer: "Einstein"
  },
  {
    question: "In the beginning of the movie, Marty's family talks about an incarcarated uncle. What's the uncle's name?",
    choices: ["Uncle Jesse", "Uncle Cracker", "Uncle Phil", "Uncle Fester", "Uncle Jailbird Joey"],
    answer: "Uncle Jailbird Joey"
  },
  {
    question: "In 1955, Marty's dad, George is harrassed by a group of bullies. Name the main bully.",
    choices: ["Nelson Muntz", "Scut Farkus", "Draco Malfoy", "Johnny Lawrence", "Biff Tannen"],
    answer: "Biff Tannen"
  },
  {
    question: "With no plutonium available to power the time machine in 1955, what natural event creates enough electricity to power the time machine?",
    choices: ["A tornado", "A bolt of lightning", "A hail storm", "A dust devil", "An earthquake"],
    answer: "A bolt of lightning"
  },
  {
    question: "At the end of the movie, Doc Brown arrives in the time machine to pick up Marty and Lorraine from Marty's house. Where are they headed?",
    choices: ["The lake for the weekend", "To get a bit to eat", "The future", "Doc Brown's house", "To a fundraiser for the clock tower"],
    answer: "The future"
  }
]

var qCounter = 1

const decrementCounter = () => {
  // decrement the counter
  counter--;
  // select that element on the page, using jquery or vanilla js
  $("#counter").text(counter)

  // check if the counter hits 0
  if (counter === 0) {
    console.log('Counter hit 0!')
    clearInterval(intId);
    // gameOver();
  }
  // set its value (or text) = our conter variable 
}; 

const countDown = () => {
  intId = setInterval(decrementCounter, 1000);
}

const displayQuestions = () => {
  // loop over our question array
  questions.map(question => {
    // build the html elements to hold the question
    var questionElement = $(`<h4 id='question${qCounter}'>`).text(question.question);
    // increment our question counter for creating unique IDs
    qCounter++;
    // build the html elements to hold the answers
      // another FOR loop or another MAP over question.choices
      // once everything is built, we need to append it to the DOM - select some element in the dom for us to append to  

      // <h4 id="question1">Back to the Future takes place in which fictional California town?</h4>
    //   <span><input type="radio" name="example1">&nbsp;Hidden Hills</span>&nbsp;&nbsp;
  })

}
const startGame = () => {
  // call a display question function
  displayQuestions();
  // start the countdown
  countDown();
}
// listen for end game condition
  // if the timer hits 0 || if the player hits submit - call the calculateScore function

// build a game over function 

// hide the quiz at the start of the game 
document.getElementById("myQuiz").style.display = "none";

$("#startButton").on('click', () => {
  // hide the first screen  
  $('#startButton').css('display', 'none')
  // display our questions
  $('#myQuiz').css('display', 'block')
  // start our game 
  startGame();

})



//if the answer to question 1 is right, increase the correctAns var by 1
//if the answer to question 1 is wrong, increase the incorrectQues var by 1
//if the asnwer to question 1 is unanswered, increase the unasnwered var by 1


document.getElementById("submitButton").onclick = function () {
  // hide the questions
  document.getElementById("myQuiz").style.display = "none";
}


