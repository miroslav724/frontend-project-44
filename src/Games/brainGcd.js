import { greeting, mainEngine } from '../index.js';
import { genRandomNum } from '../getRandomNumbers.js';
import gcd from '../gcd.js';

const game = () => {
  const maxValue = 100;
  const minValue = 1;
  const a = genRandomNum(minValue, maxValue);
  const b = genRandomNum(minValue, maxValue);
  const aAndb = `${a} ${b}`;
  const divisor = gcd(a, b);
  return [aAndb, divisor];
};

const gameGcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  mainEngine(game, name);
};

export default gameGcd;
