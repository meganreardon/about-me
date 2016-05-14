// turn on and off questions for testing purposes
var q1 = true;
var q2 = true;
var q3 = true;
var q4 = true;
var q5 = true;
var q6 = true;
var q7 = true;
var tally = true;

// set up for final # of right answers at end
var userGotQRight = 0;
var userBestPossibleScore = 7;

var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');

alert('Nice to meet you ' + userName + ', you\'re shoes are great. I\'m going to ask you some questions about me. Good luck.');

// -------------------
// question round 1
// -------------------
if (q1 == true) {
  var response1 = prompt('Do I have a dog?').toLowerCase();
  var answer1 = 'no';

  function question1() {
    if (response1 === answer1 || response1 === answer1[0]) {
      alert(userName + '! You got it right! I am indeed dog-less.');
      userGotQRight ++;
    } else {
      alert('I\'m so sorry ' + userName + ', you are incorrect. I like dogs but I don\'t have any of my own.');
    }
  }
  question1();
}

// -------------------
//question round 2
// -------------------
if (q2){
  var response2 = prompt('Do I like four-leaf clovers?').toLowerCase();
  var answer2 = 'yes';

  function question2() {
    if (response2 === answer2 || response2 === answer2[0]) {
      alert('You are correct ' + userName + '! May the luck be with you.');
      userGotQRight ++;
    } else {
      alert('Sadly, ' + userName + ' you are wrong. Better luck next time.');
    }
  }
  question2();
}

// -------------------
//question round 3
// -------------------
if (q3){
  var response3 = prompt('Do I live in San Francisco?').toLowerCase();
  var answer3 = 'no';

  function question3() {
    if (response3 === answer3 || response3 === answer3[0]) {
      alert('Correct, ' + userName + '! I live in Seattle.');
      userGotQRight ++;
    } else {
      alert('Oh no ' + userName + ' you are so wrong! I really, really didn\'t like living there.');
    }
  }
  question3();
}

// -------------------
//question round 4
// -------------------
if (q4) {
  var response4 = prompt('Do I like Halloween?').toLowerCase();
  var answer4 = 'yes';
  function question4() {
    if (response4 === answer4 || response4 === answer4[0]) {
      alert(userName + ' you are correct. I LOVE Halloween!');
      userGotQRight ++;
    } else {
      alert('You are wrong, ' + userName + '. You must be one of those Christmas-lovers.');
    }
  }
  question4();
}

// -------------------
//question round 5
// -------------------
if (q5){
  var response5 = prompt('Do I like pizza?').toLowerCase();
  var answer5 = 'yes';
  function question5() {
    if (response5 === answer5 || response5 === answer5[0]) {
      alert('Duh, of course I like pizza. Want to grab a slice ' + userName + '?');
      userGotQRight ++;
    } else {
      alert('Gasp! You are so very very incorrect. Pizza 4evr. ' + userName + ' I\'m disappointed.');
    }
  }
  question5();
}

// -------------------
//question 6
// -------------------
if (q6){
  var myNumber = 42;
  var userNumber = parseInt(prompt('Please guess a number between 1 and 50, you have four tries:'));

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

if(q7) {
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
      listOfCountries += countriesVisited[h] + ', ';
      h++;
    }
    return listOfCountries;
  }

  //note: Vatican addition below is blatant bandaid since I don't know how to end that string properly
  alert('Here are all the countries I have visited: ' + listingCountries() + 'and the Vatican. They are almost all good beer-drinking countries.');
}

// -------------------
//final tally of correct answers
// -------------------
if (tally){
  if (userGotQRight === userBestPossibleScore) {
    alert('Outstanding ' + userName + '! You have a perfect score of ' + userGotQRight + ' right out of ' + userBestPossibleScore + ' questions! Gold Star!');
  } else if (userGotQRight === 0) {
    alert('Oh, ' + userName + ', I am so very disappointed. You got ' + userGotQRight + ' questions right. It\'s like you don\'t know me at all.');
  } else {
    alert('You have ' + userGotQRight + ' out of ' + userBestPossibleScore + ' questions correct. ' + userName + ' you did OK.');
  }
}
