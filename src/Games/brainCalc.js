import { descriptionCalc, greeting, mainEngine } from '../index.js';
import { genRandomNum } from '../getRandomNumbers.js';

const expression = () => {
  const maxValue = 15;
  const minValue = 1;
  const a = genRandomNum(minValue, maxValue);
  const b = genRandomNum(minValue, maxValue);
  const opers = ['+', '-', '*'];
  const minIndexValue = 0;
  const maxIndexValue = opers.length - 1;
  const randomOperand = opers[genRandomNum(minIndexValue, maxIndexValue)];
  const result = `${a} ${randomOperand} ${b}`;
  return result;
};

const startValueExpress = (express) => {
  const convert = express.split(' ');
  const num1 = +convert[0];
  const num2 = +convert[convert.length - 1];
  const opers = convert[1];
  let result = 0;

  switch (opers) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: throw new Error(`Unknown order state: '${express}'!`);
  }

  return result;
};

const game = () => {
  const exp = expression();
  const rightAnswer = startValueExpress(exp);
  return [exp, rightAnswer];
};

const gameCalc = () => {
  const name = greeting();
  const howplay = descriptionCalc();
  return mainEngine(game, name, howplay);
};

export default gameCalc;
