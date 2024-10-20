import { mainEngine } from '../index.js';
import { genRandomNum } from '../getRandomNumbers.js';

const alert = '"yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const maxValue = 100;
  const minValue = 1;
  const randomNum = genRandomNum(minValue, maxValue);
  let isPrime = randomNum === 1 ? 'no' : 'yes';
  let i = 2;
  while (i <= randomNum / 2) {
    if (randomNum % i === 0) {
      isPrime = 'no';
      break;
    }
    i += 1;
  }
  return [randomNum, isPrime];
};

const gamePrime = () => mainEngine(game, alert);

export default gamePrime;
