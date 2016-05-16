// set up for final # of correct answers at end
var userGotQRight = 0;
var userBestPossibleScore = 7;

// greeting and start of quiz
var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');
alert('Nice to meet you ' + userName + ', you\'re shoes are great.\n\nI\'m going to ask you five questions about me. Good luck.');

// -------------------
// questions 1-5 reworked into multidimensional array and loop
// -------------------

var quizArray = [
  [
    'Question #1: Do I have a dog?',
    'no',
    userName + '! You got it right! I am indeed dog-less.',
    'I\'m so sorry ' + userName + ', you are incorrect. I like dogs but I don\'t have any of my own.'
  ],
  [
    'Question #2: Do I like four-leaf clovers?',
    'yes',
    'You are correct ' + userName + '! May the luck be with you.',
    'Sadly, ' + userName + ' you are wrong. Better luck next time.'
  ],
  [
    'Question #3: Do I live in San Francisco?',
    'no',
    'Correct, ' + userName + '! I live in Seattle.',
    'Oh no ' + userName + ' you are so wrong! I really, really didn\'t like living there.'
  ],
  [
    'Question #4: Do I like Halloween?',
    'yes',
    userName + ' you are correct. I LOVE Halloween!',
    'You are wrong, ' + userName + '. You must be one of those Christmas-lovers.'
  ],
  [
    'Question #5: Do I like pizza?',
    'yes',
    'Duh, of course I like pizza. Want to grab a slice ' + userName + '?',
    'Gasp! You are so very very incorrect. Pizza 4evr. ' + userName + ' I\'m disappointed.'
  ]
];

//this variable will bring responses up into the next question prompt
var quizAnswerUp = '';

// line below is on/off for testing REMOVE IT
// for (var i = 0; i < 0; i++) {
for (var i = 0; i < quizArray.length; i++) {
  var userAnswer = prompt(quizAnswerUp + '\n\n' + quizArray[i][0]);
  var correctAnswer = quizArray[i][1];
  userAnswer = userAnswer.toLowerCase();
  correctAnswer = correctAnswer.toLowerCase();
  if (i === quizArray.length - 1) {
    //the last right/wrong response
    if ((userAnswer === correctAnswer) || (userAnswer === correctAnswer[0])) {
      //#5 correct
      alert(quizArray[i][2]);
    } else {
      //#5 wrong
      alert(quizArray[i][3]);
    }
  } else if ((userAnswer === correctAnswer) || (userAnswer === correctAnswer[0])) {
    // alert(quizArray[i][2]);
    quizAnswerUp = quizArray[i][2];
    userGotQRight ++;
  } else {
    // alert(quizArray[i][3]);
    quizAnswerUp = quizArray[i][3];
  }
}

/* SAVED ORIG QUIZ LOOP
// line below is on/off for testing REMOVE IT
for (var i = 0; i < 0; i++) {
// for (var i = 0; i < quizArray.length; i++) {
  var userAnswer = prompt(quizArray[i][0]);
  var correctAnswer = quizArray[i][1];
  userAnswer = userAnswer.toLowerCase();
  correctAnswer = correctAnswer.toLowerCase();
  if ((userAnswer === correctAnswer) || (userAnswer === correctAnswer[0])) {
    alert(quizArray[i][2]);
    userGotQRight ++;
  } else {
    alert(quizArray[i][3]);
  }
}
*/

// -------------------
// question 6 - guess the number
// -------------------

var j = 0;
var guessedTheNumber = false;
var myNumber = Math.floor((Math.random() * 10) + 1);
var userNumber = parseInt(prompt('I\'ve summoned a random number between 1 and 10, you have four tries to guess what it is. Good luck:'));

// the line below is on/off for testing REMOVE IT
for (var i = 0; i < 0; i++) {
// for (var i = 0; i < 4; i++) {
  if (i === 3){
    alert('ALL ANSWERS ARE WRONG\n\nThe secret number was ' + myNumber + '.');
    break;
  } else if (userNumber === myNumber) {
    alert('Wowsers! You guessed the secret number, it was indeed ' + myNumber + '!');
    userGotQRight ++;
    break;
  } else if (userNumber < myNumber) {
    userNumber = parseInt(prompt('Too low, enter something a wee bit higher.'));
  } else if (userNumber > myNumber) {
    userNumber = parseInt(prompt('So close, try a lower number.'));
  } else {
    // if answer is NaN let them know, don't let that count against their amount of guesses
    i--;
    userNumber = parseInt(prompt('That, my dear friend, is not a number! Try again, gimme a number.'));
  }
}

// -------------------
// question 7 - countries
// -------------------

// setting up some data
var countriesVisited = ['England', 'Ireland', 'Wales', 'Scotland', 'Italy', 'Belgium', 'Canada'];
var gotOneRight = false;

// function to print out list of contries at the end
var listOfCountries = 'Here are all the countries I have visited: ';

function listingCountries() {
  for (var h = 0; h < countriesVisited.length; h++) {
    if (h < countriesVisited.length - 1) {
      listOfCountries += countriesVisited[h] + ', ';
    } else {
      listOfCountries += 'and ' + countriesVisited[h] + '. They are all good beer-drinking countries.';
      return listOfCountries;
    }
  }
}

// starting the question
var countriesGuessed = prompt('Alright ' + userName + ', guess a country that I have visited, you have six tries. Go on. Enter one now:');

// the line below is on/off for testing REMOVE IT
for (var i = 0; i < 0; i++) {
// for (var i = 0; i < 5; i++) {
  for (var j = 0; j < countriesVisited.length; j++) {
    if (countriesGuessed.toLowerCase() === countriesVisited[j].toLowerCase()) {
      gotOneRight = true;
      break;
    }
  }
  if (gotOneRight == false) {
    countriesGuessed = prompt('Sorry, nope.\n\nTry again:');
  }
}

// finish question 7
if (gotOneRight) {
  alert('Congrats! ' + countriesVisited[j] + ' is one of the places I\'ve traveled to.\n\n' + listingCountries());
  userGotQRight ++;
} else {
  alert('Sorry, you did not guess any of the countries.\n\n' + listingCountries());
}

/* SAVED ORIGINAL COUNTRIES LOOP
// the line below is on/off for testing REMOVE IT
// for (var i = 0; i < 0; i++) {
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < countriesVisited.length; j++) {
    if (countriesGuessed.toLowerCase() === countriesVisited[j].toLowerCase()) {
      gotOneRight = true;
      break;
    }
  }
  if (gotOneRight == false) {
    countriesGuessed = prompt('Sorry that was incorrect.\n\nTry again:');
  }
}

// finish question 7
if (gotOneRight) {
  alert('Congrats! ' + countriesVisited[j] + ' is one of the places I\'ve traveled to.\n\n' + listingCountries());
  userGotQRight ++;
} else {
  alert('Sorry, you did not guess any of the countries.\n\n' + listingCountries());
}
*/

// -------------------
// final tally of correct answers
// -------------------

function userScoreMsg() {
  var userScoreMsgString = userName + ' you got ' + userGotQRight + ' out of ' + userBestPossibleScore + ' trivia questions correct.';
  return userScoreMsgString;
}

if (userGotQRight === userBestPossibleScore) {
  alert(userScoreMsg() + ' Wow! You did great!\n\n* * * GOLD STAR * * *');
} else if (userGotQRight === 0) {
  alert(userScoreMsg() + ' I\'m disappointed, it\'s like you don\'t know me at all.');
} else if (userGotQRight <= Math.floor(userBestPossibleScore / 2)) {
  alert(userScoreMsg() + ' You tried hard but this isn\'t a victory. Here, have a door prize.');
} else {
  alert(userScoreMsg() + ' Not too bad!');
}
