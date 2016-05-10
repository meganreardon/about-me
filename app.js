var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');

alert('Nice to meet you ' + userName + ', you\'re shoes are great. I\'m going to ask you some questions about me. Good luck.');

//unneccessary code line below, left in for posterity, at least for the moment
//console.log('The user\'s name is ' + userName + ' and they have good shoes.');

// question round 1
var response1 = prompt('Do I have a dog?').toLowerCase();
var answer1 = 'no';

if (response1 === answer1 || response1 === answer1[0]) {
  alert(userName + '! You got it right! I am indeed dog-less.');
} else {
  alert('I\'m so sorry ' + userName + ', you are incorrect. I like dogs but I don\'t have any of my own.');
}

//question round 2
var response2 = prompt('Do I like four-leaf clovers?').toLowerCase();
var answer2 = 'yes';

if (response2 === answer2 || response2 === answer2[0]) {
  alert('You are correct ' + userName + '! May the luck be with you.');
} else {
  alert('Sadly, ' + userName + ' you are wrong. Better luck next time.');
}

//question round 3
var response3 = prompt('Do I live in San Francisco?').toLowerCase();
var answer3 = 'no';

if (response3 === answer3 || response3 === answer3[0]) {
  alert('Correct, ' + userName + '! I live in Seattle.');
} else {
  alert('Oh no ' + userName + ' you are so wrong! I really, really didn\'t like living there.');
}

//question round 4
var response4 = prompt('Do I like Halloween?').toLowerCase();
var answer4 = 'yes';

if (response4 === answer4 || response4 === answer4[0]) {
  alert(userName + ' you are correct. I LOVE Halloween!');
} else {
  alert('You are wrong, ' + userName + '. You must be one of those Christmas-lovers.');
}

//question round 5
var response5 = prompt('Do I like pizza?').toLowerCase();
var answer5 = 'yes';

if (response5 === answer5 || response5 === answer5[0]) {
  alert('Duh, of course I like pizza. Want to grab a slice ' + userName + '?');
} else {
  alert('Gasp! You are so very very incorrect. Pizza 4evr. ' + userName + ' I\'m disappointed.');
}
