import readlineSync from 'readline-sync';

export const correctAnswers = 3;

export const mainEngine = (feature, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 1; i <= correctAnswers; i += 1) {
    const [exp, rightAnswer] = feature();
    console.log(`Question: ${exp} `);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    if (i === correctAnswers) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};
