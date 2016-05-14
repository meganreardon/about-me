// turn on and off questionf for testing purposes
var q1 = false;
var q2 = false;
var q3 = false;
var q4 = false;
var q5 = false;
var q6 = false;
var q7 = true;
var q8 = false;

// set up for final # of right answers at end
var userGotQRight = 0;
var userBestPossibleScore = 7;

var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');

alert('Nice to meet you ' + userName + ', you\'re shoes are great. I\'m going to ask you some questions about me. Good luck.');

// -------------------
// question round 1
// -------------------
console.log(q1);
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
      console.log(i);
    }
  }
}

// -------------------
//question 7
// -------------------

var countriesVisited = ['England', 'Ireland', 'Wales', 'Scotland', 'Italy', 'Belgium', 'Canada'];
var countriesGuessed = prompt('Alright ' + userName + ', guess a country that I have visited, you have six tries. Go on. Enter one now:');
var gotOneRight = false;

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < countriesVisited.length; j++) {
    //console.log('j is ' + j + ' and array answer is at ' + countriesVisited[j]);
    if (i = 5) {
      alert('You did not guess any of the countries, sorry ' + userName + '!');
      break;
    } else if (countriesGuessed === countriesVisited[j]) {
      //set to true
      alert('Congrats! You got that right!');
      gotOneRight = true;
      //break
      break;
    }
  }
  //get new guess
  if (gotOneRight == false) {
    console.log(gotOneRight + ' i is at ' + i);
    if (i < 4) {
      countriesGuessed = prompt('Sorry that was incorrect. Try again:');
    } else {
      countriesGuessed = prompt('You have one last guess remaining:');
    }
  }
}

if (gotOneRight) {
  //say yay
  //alert('Congrats! You got that right!');
  alert('you should not be able to get to this message');
  userGotQRight ++;
} else {
  //say too bad
  alert('Sorry, you did not guess any of the countries.');
}

/* SO BROKEN
for (var i = 0; i < 6; i++) {
  console.log('top of loop, i is ' + i);
  if (i === 5) {
    alert('Sorry, you did not guess any of the countries. Tough break ' + userName + '.');
    console.log('user DID NOT GUESS, about to break');
    break;
  } else {
    for (var j = 0; j < countriesVisited.length; j++) {
      console.log('top of countries loop, j is ' + j );
    //console.log('j is ' + j + ' and array answer is at ' + countriesVisited[j]);
      if (countriesGuessed === countriesVisited[j]) {
        //set to true
        //gotOneRight = true;
        //break
        alert('Congrats ' + userName + '! You got that right!');
        gotOneRight = true;
        console.log('user got one RIGHT, about to break');
        break;
      }
    // if (countriesGuessed === countriesVisited[j]) {
    //   gotOneRight = true;
    //   break;
    // }
  //if (gotOneRight == false) {
  }
  if (gotOneRight === false) {
    if (countriesGuessed < 5) {
      countriesGuessed = prompt('Sorry that was incorrect. Try again:');
    } else {
      countriesGuessed = prompt('That was wrong, but you have one last try:');
    }
  }
*/

//   if ((gotOneRight = false)&&(countriesGuessed < 5)) {
//     countriesGuessed = prompt('Sorry that was incorrect. Try again:');
//   } else {
//     countriesGuessed = prompt('That was wrong, but you have one last try:');
//   }
// }

/* SAVED BROKEN CODE Here
for (var i = 0; i < 6; i++) {
  if (i === 5) {
    alert('Sorry, you did not guess any of the countries. Tough break ' + userName);
    break;
  } else {
    for (var j = 0; j < countriesVisited.length; j++) {
      if ((countriesGuessed === 5) && (gotoneRight === false)) {
        //tough break message
        //alert('Sorry, you did not guess any of the countries. Tough break ' + userName);
        //break;
        //break
      } else {
        //congrats message
        alert('Congrats ' + userName + '! You got one right!');
        break;
        //break
      }
    // if (countriesGuessed === countriesVisited[j]) {
    //   gotOneRight = true;
    //   break;
    // }
    }
  }
  if (gotOneRight == false) {
    countriesGuessed = prompt('Sorry that was incorrect. Try again:');
  }
}
*/

// if (gotOneRight) {
//   alert('Congrats ' + userName + '! You got that right!');
//   userGotQRight ++;
// } else {
//   alert('Sorry, you did not guess any of the countries. Tough break ' + userName);
// }

//loop to print out the array for question 7
var listOfCountries = '';
var h = 0;
while (h < countriesVisited.length) {
  listOfCountries += countriesVisited[h] + ', ';
  h++;
}
listOfCountries += 'and the Vatican.'; //note: blatant bandaid since I don't know how to end that string properly
alert('Here are all the countries I have visited: ' + listOfCountries + ' They are almost all good beer-drinking countries.');

// -------------------
//final tally of correct answers
// -------------------
if (q8){
  if (userGotQRight === userBestPossibleScore) {
    alert('Outstanding ' + userName + '! You have a perfect score of ' + userGotQRight + ' right out of ' + userBestPossibleScore + ' questions! Gold Star!');
  } else if (userGotQRight === 0) {
    alert('Oh, ' + userName + ', I am so very disappointed. You got ' + userGotQRight + ' questions right. It\'s like you don\'t know me at all.');
  } else {
    alert('You have ' + userGotQRight + ' out of ' + userBestPossibleScore + ' questions correct. ' + userName + ' you did OK.');
  }
}
