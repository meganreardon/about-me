var q15 = false;
var q6 = false;
var q7 = false;
var tally = false;
var userName = 'Esther'; // DON'T KEEP ME
var userGotQRight; // DON'T KEEP ME

// this is the set up for final # of right answers at end
/* TURN ME BACK ON
var userGotQRight = 0;
var userBestPossibleScore = 7;

var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');

alert('Nice to meet you ' + userName + ', you\'re shoes are great. I\'m going to ask you some questions about me. Good luck.');
TURN ME BACK ON */

// -------------------
// questions 1-5 reworked into multidimensional array and loop
// -------------------
if (q15) {
  var quizArray = [
    [
      'Do I have a dog?',
      'no',
      userName + '! You got it right! I am indeed dog-less.',
      'I\'m so sorry ' + userName + ', you are incorrect. I like dogs but I don\'t have any of my own.'
    ],
    [
      'Do I like four-leaf clovers?',
      'yes',
      'You are correct ' + userName + '! May the luck be with you.',
      'Sadly, ' + userName + ' you are wrong. Better luck next time.'
    ],
    [
      'Do I live in San Francisco?',
      'no',
      'Correct, ' + userName + '! I live in Seattle.',
      'Oh no ' + userName + ' you are so wrong! I really, really didn\'t like living there.'
    ],
    [
      'Do I like Halloween?',
      'yes',
      userName + ' you are correct. I LOVE Halloween!',
      'You are wrong, ' + userName + '. You must be one of those Christmas-lovers.'
    ],
    [
      'Do I like pizza?',
      'yes',
      'Duh, of course I like pizza. Want to grab a slice ' + userName + '?',
      'Gasp! You are so very very incorrect. Pizza 4evr. ' + userName + ' I\'m disappointed.'
    ]
  ];

  for (var i = 0; i < quizArray.length; i++) {
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
}
// -------------------
//question 6
// -------------------
if (q6) {
  var myNumber = Math.floor((Math.random() * 10) + 1);

  var userNumber = parseInt(prompt('I\'ve summoned a random number between 1 and 10, you have four tries to guess what it is. Good luck:'));

  for (var i = 0; i < 4; i++) {
    if (i === 3){
      alert('ALL ANSWERS ARE INCORRECT');
      break;
    } else if (userNumber === myNumber) {
      alert('Wowsers! You guessed the correct number!');
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
}

// -------------------
//question 7
// -------------------

var countriesVisited = ['England', 'Ireland', 'Wales', 'Scotland', 'Italy', 'Belgium', 'Canada'];
var countriesGuessed = prompt('Alright ' + userName + ', guess a country that I have visited, you have six tries. Go on. Enter one now:');
var gotOneRight = false;

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < countriesVisited.length; j++) {
    if (countriesGuessed.toLowerCase() === countriesVisited[j].toLowerCase()) {
      gotOneRight = true;
      break;
    }
  }
  if (gotOneRight == false) {
    countriesGuessed = prompt('Sorry that was incorrect. Try again:');
  }
}

if (gotOneRight) {
  alert('Congrats! You got that right!');
  userGotQRight ++;
} else {
  alert('Sorry, you did not guess any of the countries.');
}

//function to print out list of contries
var listOfCountries = '';
var h = 0;

function listingCountries() {
  while (h < countriesVisited.length) {
    if (h === countriesVisited.length - 1) {
      listOfCountries += 'and ' + countriesVisited[h] + '.';
      h++;
    } else {
      listOfCountries += countriesVisited[h] + ', ';
      h++;
    }
  }
  return listOfCountries;
}

alert('Here are all the countries I have visited: ' + listingCountries() + ' They are all good beer-drinking countries.');

// -------------------
//final tally of correct answers
// -------------------
if (tally) {
  function userScoreMsg() {
    var userScoreMsgString = userName + ' you got ' + userGotQRight + ' out of ' + userBestPossibleScore + ' trivia questions correct.';
    return userScoreMsgString;
  }

  if (userGotQRight === userBestPossibleScore) {
    alert(userScoreMsg() + ' Wow! You did great!');
  } else if (userGotQRight === 0) {
    alert(userScoreMsg() + ' I\'m disappointed, it\'s like you don\'t know me at all.');
  } else if (userGotQRight <= Math.floor(userBestPossibleScore / 2)) {
    alert(userScoreMsg() + ' You tried hard but this isn\'t a victory. Here, have a door prize.');
  } else {
    alert(userScoreMsg() + ' Not too bad!');
  }
}
