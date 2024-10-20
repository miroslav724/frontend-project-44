import { mainEngine } from '../index.js';
import { genRandomNum } from '../getRandomNumbers.js';
import addProgression from '../progression.js';

const alert = 'What number is missing in the progression?';

const game = () => {
  const minCount1 = 5;
  const maxCount1 = 10;
  const minStep = 1;
  const maxStep = 10;
  const progresion = addProgression(minCount1, maxCount1, minStep, maxStep);
  const somethingIndex = genRandomNum(0, progresion.length - 1);
  const rightAnswer = progresion[somethingIndex];
  progresion[somethingIndex] = '..';
  const strProgression = progresion.join(' ');
  return [strProgression, rightAnswer];
};

const gameProgression = () => mainEngine(game, alert);

export default gameProgression;
