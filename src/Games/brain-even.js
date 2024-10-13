import { genRandomNum } from '../getRandomNumbers.js';
import { greeting, mainEngine } from '../index.js';

const playGround = () => {
  const maxValue = 100;
  const minValue = 1;
  const randomNum = genRandomNum(minValue, maxValue);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [randomNum, rightAnswer];
};

const gameEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number i even, otherwise answer "no"');
  mainEngine(playGround, name);
};

export default gameEven;
