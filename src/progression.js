import { genRandomNum } from './getRandomNumbers.js';

export default (minNumE1, maxNumE1, minStep = 1, maxStep = 10, minFirstE1 = 1, maxFirstE1 = 10) => {
  const progression = [];
  const countElements = genRandomNum(minNumE1, maxNumE1);
  const countSteps = genRandomNum(minStep, maxStep);
  progression[0] = genRandomNum(minFirstE1, maxFirstE1);

  for (let i = 1; i <= countElements; i += 1) {
    progression[i] = progression[i - 1] + countSteps;
  }
  return progression;
};
