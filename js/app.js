'use strict'

//console.log('proof of life');
score = 0;

let name = prompt("Hi there, welcome to my quiz about me. What's your name?");

let wrestling = prompt("Thanks for visiting my site " + name + "! Your first question is: Was I the only girl on the Franklin middle school wrestling team in the 7th grade? Answer with a yes or a no.");
wrestling = wrestling.toUpperCase();
if (wrestling === 'N'|| wrestling === 'NO') {
  alert("That's right. There were two of us.");
  score++;
}
else {
  alert("That is incorrect. There were two of us.");
}

let pets = prompt("Next question: Do I currently have only one pet? Answer with a yes or a no.");
pets = pets.toUpperCase();
if (pets === 'Y' || pets === 'YES'){
  alert("Correct! I have an approximately nine year old pit bull and that's it.");
  score++;
}
else {
  alert("You're wrong, I just have the one dog.");
}

let toto = prompt("My dog's name is Tito, is that right? Answer with a yes or a no.")
toto = toto.toUpperCase();
if (toto === 'N' || toto === 'NO'){
  alert("That\'s right! His name is actually Toto.");
  score++;
}
else {
  alert ("That\'s wrong. His name is actually Toto.");
}

let language = prompt("I speak two languages fluently. Is this true? Answer with a yes or a no.");
language = language.toUpperCase();
if (language === 'N' || toto === 'NO'){
  alert("Right. I cannot speak any languages besides English.");
  score++;
}
else {
  alert ("That\'s wrong. I cannot speak any other languages besdies English.");
}

let job = prompt("I've been working the same job for the past two years. Is this true? Answer with a yes or a no.");
job = job.toUpperCase();
if (language === 'N' || toto === 'NO'){
  alert("That\'s correct, I've actually had several. Thanks for taking my quiz " + name + ". I hope you had fun!");
  score++;
}
else {
  alert ("That\'s wrong, I've actually had several.");
}

var randomNumber = (Math.floor(Math.random()*10)) + 1;
for(var i=0; i<4; i++){
var number = prompt('Can you guess a number between 1 and 10');
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

  var answers = ['GREEN', 'TAUPE', 'PINK', 'ORANGE'];
    for (var x=0; x<6; x++){
      var color = prompt('Can you guess one of the four most influential colors of the day?');
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
        else if (color.toUpperCase() === answers[1]){
          alert('That\'s a correct answer!');
          score++;
          break;
        }
        else{
          alert('Sorry, that is not a correct answer!');
        }
      }
      alert('The correct answers were: green, taupe, pink, and orange!');
  alert('Your final score on this quiz was ' + score + '/7!');
 


