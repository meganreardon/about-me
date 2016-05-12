var userGotQRight = 0;
var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');

alert('Nice to meet you ' + userName + ', you\'re shoes are great. I\'m going to ask you some questions about me. Good luck.');

// question round 1
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

//question round 2
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

//question round 3
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

// //question round 4
// var response4 = prompt('Do I like Halloween?').toLowerCase();
// var answer4 = 'yes';
//
// if (response4 === answer4 || response4 === answer4[0]) {
//   alert(userName + ' you are correct. I LOVE Halloween!');
//   userGotQRight ++;
// } else {
//   alert('You are wrong, ' + userName + '. You must be one of those Christmas-lovers.');
// }
//
// //question round 5
// var response5 = prompt('Do I like pizza?').toLowerCase();
// var answer5 = 'yes';
//
// if (response5 === answer5 || response5 === answer5[0]) {
//   alert('Duh, of course I like pizza. Want to grab a slice ' + userName + '?');
//   userGotQRight ++;
// } else {
//   alert('Gasp! You are so very very incorrect. Pizza 4evr. ' + userName + ' I\'m disappointed.');
// }
//
// //question 6
// var myNumber = 42;
// var userNumber = parseInt(prompt('Please guess a number.'));
//
// for (var i = 0; i < 4; i++) {
//   if (i === 3){
//     alert('ALL ANSWERS ARE INCORRECT');
//     break;
//   } else if (userNumber === myNumber) {
//     alert('Wowsers! You guessed the correct number!');
//     userGotQRight ++;
//     break;
//   } else if (userNumber < myNumber) {
//     userNumber = parseInt(prompt('Too low, enter something a wee bit higher.'));
//   } else if (userNumber > myNumber) {
//     userNumber = parseInt(prompt('So close, try a lower number.'));
//   } else {
//     i--;
//     userNumber = parseInt(prompt('That, my dear friend, is not a number! Try again, gimme a number.'));
//   }
// }
//
// //question 7
// var countriesVisited = ['England', 'Ireland', 'Wales', 'Scotland', 'Italy', 'Belgium', 'Canada'];
// var countriesGuessed = prompt('Guess a country that I have visited. Go on. Enter one now:');
// var gotOneRight = false;
//
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < countriesVisited.length; j++) {
//     //console.log('j is ' + j + ' and array answer is at ' + countriesVisited[j]);
//     if (countriesGuessed === countriesVisited[j]) {
//       //set to true
//       gotOneRight = true;
//       //break
//       break;
//     }
//   }
//   //get new guess
//   if (gotOneRight == false) {
//     countriesGuessed = prompt('Sorry that was incorrect. Try again:');
//   }
// }
//
// if (gotOneRight) {
//   //say yay
//   alert('Congrats! You got that right!');
//   userGotQRight ++;
// } else {
//   //say too bad
//   alert('Sorry, you did not guess any of the countries.');
// }
//
// //loop to print out the array goes here
// var listOfCountries = '';
// var h = 0;
// while (h < countriesVisited.length) {
//   listOfCountries += countriesVisited[h] + ', ';
//   h++;
// }
// listOfCountries += 'and the Vatican.'; //note: blatant bandaid since I don't know how to end that string properly
// alert('Here are all the countries I have visited: ' + listOfCountries + ' They are almost all good beer-drinking countries.');
//
// if (userGotQRight === 7) {
//   alert('Outstanding ' + userName + '! You have a perfect score of ' + userGotQRight + ' right out of 7 questions!');
// } else if (userGotQRight === 0) {
//   alert('Oh, ' + userName + ', I am so very disappointed. You got ' + userGotQRight + ' questions right. It\'s like you don\'t know me at all.');
// } else {
//   alert('Well, ' + userName + '. You have ' + userGotQRight + ' out of 7 questions correct. That is ok.');
// }
