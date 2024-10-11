import { genRandomNum } from '../getRandomNumbers.js';
import { mainEngine } from '../index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getData = () => {
  const question = genRandomNum(1, 100);
  const questionRight = isEven(question);

  return [question, questionRight];
};

const playGame = () => mainEngine(getData, description);

export default playGame;
