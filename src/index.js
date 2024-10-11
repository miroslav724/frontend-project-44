import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const mainEngine = (getData, description) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const correctAnswers = 3;

  for (let i = 1; i <= correctAnswers; i += 1) {
    const [question, questionRight] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your Answer: ');

    if (questionRight === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
