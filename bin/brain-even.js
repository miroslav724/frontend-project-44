#!/usr/bin/env node

import readline from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const Greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  const askQuestion = () => {
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readline.question('Your answer: ');

    if (answer.toLowerCase() === 'yes' && isEven(number)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (answer.toLowerCase() === 'no' && !isEven(number)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.\nLets try again, ${name}`);
    }
    askQuestion();
  };
  askQuestion();
};

Greeting();
