import { genRandomNum } from '../getRandomNumbers.js';
import { mainEngine } from '../index.js';

const alert = '"yes" if the number is even, otherwise answer "no".';

const game = () => {
  const maxValue = 100;
  const minValue = 1;
  const randomNum = genRandomNum(minValue, maxValue);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [randomNum, rightAnswer];
};

const gameEven = () => {
  mainEngine(game, alert);
};

export default gameEven;
