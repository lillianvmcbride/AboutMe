'use strict'

//console.log('proof of life');

let wrestling = prompt("Hi there, welcome to my quiz about me. Your first question is: Was I the only girl on the Franklin middle school wrestling team in the 7th grade? Answer with a yes or a no.");
wrestling = wrestling.toUpperCase();
if (wrestling === 'N'|| wrestling === 'NO') {
  alert("That's right. There were two of us.");
}
else {
  alert("That is incorrect. There were two of us.");
}

let pets = prompt("Next question: Do I currently have only one pet? Answer with a yes or a no.");
pets = pets.toUpperCase();
if (pets === 'Y' || pets === 'YES'){
  alert("Correct! I have an approximately nine year old pit bull and that's it.");
}
else {
  alert("You're wrong, I just have the one dog.");
}

let toto = prompt("My dog's name is Tito, is that right? Answer with a yes or a no.")
toto = toto.toUpperCase();
if (toto === 'N' || toto === 'NO'){
  alert("That\'s right! His name is actually Toto.");
}
else {
  alert ("That\'s wrong. His name is actually Toto");
}

let language = prompt("I speak two languages fluently. Is this true? Answer with a yes or a no.");
language = language.toUpperCase();
if (language === 'N' || toto === 'NO'){
  alert("Right. I cannot speak another language");
}
else {
  alert ("That\'s wrong. I cannot speak another language besdies English.");
}

let job = prompt("I've been working the same job for the past two years. Is this true? Answer with a yes or a no.");
job = job.toUpperCase();
if (language === 'N' || toto === 'NO'){
  alert("That\'s correct, I've actually had several.");
}
else {
  alert ("That\'s wrong, I've actually had several.");
}