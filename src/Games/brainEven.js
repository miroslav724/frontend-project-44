import { genRandomNum } from '../getRandomNumbers.js';
import { descriptionEven, greeting, mainEngine } from '../index.js';

const game = () => {
  const maxValue = 100;
  const minValue = 1;
  const randomNum = genRandomNum(minValue, maxValue);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [randomNum, rightAnswer];
};

const gameEven = () => {
  const name = greeting();
  const howplay = descriptionEven();
  mainEngine(game, name, howplay);
};

export default gameEven;
