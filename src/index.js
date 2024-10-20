import readlineSync from 'readline-sync';
import isRight from './isRight.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const descriptionEven = () => console.log('Answer "yes" if the number i even, otherwise answer "no"');
export const descriptionCalc = () => console.log('What is the result of the expression?');
export const descriptionGcd = () => console.log('Find the greatest common divisor of given numbers.');
export const descriptionPrime = () => console.log('"yes" if given number is prime. Otherwise answer "no".');
export const descriptionProgression = () => console.log('What number is missing in the progression?');

export const correctAnswers = 3;

export const mainEngine = (feature, userName) => {
  for (let i = 1; i <= correctAnswers; i += 1) {
    const [exp, rightAnswer] = feature();
    console.log(`Question: ${exp} `);
    const userAnswer = readlineSync.question('Your Answer: ');
    const isTrue = isRight(userAnswer, rightAnswer);
    if (isTrue === false) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    if (i === correctAnswers) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};
