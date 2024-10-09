import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const nameQu = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};
