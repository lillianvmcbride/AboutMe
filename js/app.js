
'use strict';

//console.log('proof of life');
let score = 0;

let userName = prompt('Hi there, welcome to my quiz about me. What\'s your name?');

let questions = ['Thanks for visiting my site ' + userName + '! Your first question is: Was I the only girl on the Franklin middle school wrestling team in the 7th grade? Answer with a yes or a no.', 'Next question: Do I currently have only one pet? Answer with a yes or a no.', 'My dog\'s name is Tito, is that right? Answer with a yes or a no.', 'I speak two languages fluently. Is this true? Answer with a yes or a no.', 'I\'ve been working the same job for the past two years. Is this true? Answer with a yes or a no.'];

let answers = ['N', 'Y', 'N', 'N', 'N'];
let correctResponses = ['That\'s right. There were two of us.', 'Correct! I have an approximately nine year old pit bull and that\'s it.', 'That\'s right! His name is actually Toto.', 'Right. I cannot speak any languages besides English.', 'That\'s correct, I\'ve actually had several.'];
let incorrectResponses = ['That is incorrect. There were two of us.', 'You\'re wrong, I just have the one dog.', 'That\'s wrong. His name is actually Toto.', 'That\'s wrong. I cannot speak any other languages besdies English.', 'That\'s wrong, I\'ve actually had several.'];

function takeQuiz(){
  askQuestions();
  randomNumber();
  guessColor();
}

function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i]).toUpperCase();
    if (answer.charAt(0) === answers[i]) {
      alert(correctResponses[i]);
      score++;
    }
    else alert(incorrectResponses[i]);
  }
}

// function question1 () {
//   let wrestling = prompt(questions[0]);
//   wrestling = wrestling.toUpperCase();
//   if (wrestling === 'N'|| wrestling === 'NO') {
//     alert('That\'s right. There were two of us.');
//     score++;
//   }
//   else {
//     alert('That is incorrect. There were two of us.');
//   }
// }

// function question2() {
//   let pets = prompt(questions[1]);
//   pets = pets.toUpperCase();
//   if (pets === 'Y' || pets === 'YES'){
//     alert('Correct! I have an approximately nine year old pit bull and that\'s it.');
//     score++;
//   }
//   else {
//     alert('You\'re wrong, I just have the one dog.');
//   }
// }

// function question3() {
//   let toto = prompt(questions[2]);
//   toto = toto.toUpperCase();
//   if (toto === 'N' || toto === 'NO'){
//     alert('That\'s right! His name is actually Toto.');
//     score++;
//   }
//   else {
//     alert ('That\'s wrong. His name is actually Toto.');
//   }
// }

// function question4() {
//   let language = prompt(questions[3]);
//   language = language.toUpperCase();
//   if (language === 'N' || language === 'NO'){
//     alert('Right. I cannot speak any languages besides English.');
//     score++;
//   }
//   else {
//     alert ('That\'s wrong. I cannot speak any other languages besdies English.');
//   }
// }

// function question5() {
//   let job = prompt(questions[4]);
//   job = job.toUpperCase();
//   if (job === 'N' || job === 'NO'){
//     alert('That\'s correct, I\'ve actually had several. Thanks for taking my quiz ' + name + '. I hope you had fun!');
//     score++;
//   }
//   else {
//     alert ('That\'s wrong, I\'ve actually had several.');
//   }
// }

function randomNumber() {
  let number = 0;
  let randomNumber = (Math.floor(Math.random()*10)) + 1;
  for(let i=0; i<4; i++){
    number = prompt('Can you guess a number between 1 and 10');
    number = parseInt(number);
    if (number === randomNumber) {
      alert('That\'s correct!');
      score++;
      break;
    }
    else if (number > randomNumber){
      alert('That\'s too high!');
    }
    else if (number < randomNumber){
      alert('That\'s too low!');
    }
  }
  if (number !== randomNumber){
    alert('Actually, the number was ' + randomNumber + '.');
  }
}

function guessColor() {
  let answers = ['GREEN', 'TAUPE', 'PINK', 'ORANGE'];
  for (let x=0; x<6; x++){
    let color = prompt('Can you guess one of the four most influential colors of the day?');
    if (color.toUpperCase() === answers[0]){
      alert('That\'s a correct answer!');
      score++;
      break;
    }
    else if (color.toUpperCase() === answers[1]){
      alert('That\'s a correct answer!');
      score++;
      break;
    }
    else if (color.toUpperCase() === answers[2]){
      alert('That\'s a correct answer!');
      score++;
      break;
    }
    else if (color.toUpperCase() === answers[3]){
      alert('That\'s a correct answer!');
      score++;
      break;
    }
    else{
      alert('Sorry, that is not a correct answer!');
    }
  }
  alert('The correct answers were: green, taupe, pink, and orange!');
  alert('Your final score on this quiz was ' + score + '/7, ' + userName + '!');
}

takeQuiz();
