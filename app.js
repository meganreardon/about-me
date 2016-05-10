var userName = prompt('Hi! Thanks for visiting my About Me page! What is your name?');

alert('Nice to meet you ' + userName + ', you\'re shoes are great. I\'m going to ask you some questions about me. Good luck.');

console.log('The user\'s name is ' + userName + ' and they have good shoes.');

// question round 1
var response1 = prompt('Do I have a dog?').toLowerCase();
var answer1 = 'no';

if (response1 === answer1 || response1 === answer1[0]) {
  alert(userName + '! You got it right! I am indeed dog-less.');
} else {
  alert('I\'m so sorry ' + userName + ', you are incorrect.');
}

//need 5 questions total
