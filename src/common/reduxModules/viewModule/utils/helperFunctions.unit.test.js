import {
  showFlex,
  showBlock,
  toggleFlex,
} from './helperFunctions';

const smallSize = 500;
const bigSize = 1000;
const none = 'none';
const flex = 'flex';


test('showFlex w/ smallSize => none', () => {
  expect(showFlex(smallSize)).toBe(none);
})

test('showFlex w/ bigSize => flex', () => {
  expect(showFlex(bigSize)).toBe(flex);
})
