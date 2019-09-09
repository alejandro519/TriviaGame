// Page loads, start button appears

// When start button is clicked, page with the following elements appears:

// 30 second countdown timer that starts to countdown

// Questions with 5 multiple choice responses, each response with a corresponding radio button

// When radio button is clicked, choice remains clicked, if another radio button is clicked for the same questions, you can only choose radio button one at a time

// If time runs out, message displayed showing correct answers, incorrect answers and unanswered 

// Done button displayed at the bottom of the page that ends the game on user's command

var counter = 30;
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var timer;
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


document.getElementById("myQuiz").style.display = "none";

document.getElementById("startButton").onclick = function () {

  document.getElementById("myQuiz").style.display = "block";

  document.getElementById("startButton").style.display = "none";

}

//if the answer to question 1 is right, increase the correctAns var by 1
//if the answer to question 1 is wrong, increase the incorrectQues var by 1
//if the asnwer to question 1 is unanswered, increase the unasnwered var by 1

function quiz(){
}
quiz()


document.getElementById("submitButton").onclick = function () {
  document.getElementById("myQuiz").style.display = "none";
}


