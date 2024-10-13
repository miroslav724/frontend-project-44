import readlineSync from 'readline-sync';
import isRight from './isRight.js';

// eslint-disable-next-line import/prefer-default-export
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const correctAnswers = 3;

export const mainEngine = (fun, userName) => {
  for (let i = 1; i <= correctAnswers; i += 1) {
    const [exp, rightAnswer] = fun();
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
