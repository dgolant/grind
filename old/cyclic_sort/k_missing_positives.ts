const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end, prev } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from '../../util';
import Heap from 'collections/heap';

function sort(input): void {
  let i = 0;
  while (i < input.length) {
    const j = input[i] - 1;
    if (input[i] !== input[j]) {
      [input[i], input[j]] = [input[j], input[i]]; // swap
    } else {
      i += 1;
    }
  }
}
function k_missing_positive(input: number[], k): number[] {
  let j = 0;
  // let filtInput = input.filter(i => i > 0);
  while (j < input.length) {
    let k = input[j] - 1;
    if (input[j] > 0 && input[j] <= input.length && input[k] !== input[j]) {
      [input[k], input[j]] = [input[j], input[k]];
    } else {
      j++;
    }
  }
  let missingNumbers = [];
  let extraNumbers = new Set();
  for (let i = 0; i < input.length; i++) {
    if (missingNumbers.length < k) {
      if (input[i] != i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(input[i]);
      }
    }
  }
  let i = 1;
  while (missingNumbers.length < k) {
    const cand = input.length + i;
    if (!extraNumbers.has(cand)) {
      missingNumbers.push(cand);
    }
    i++;
  }

  return missingNumbers;
}

let f = k_missing_positive([3, -1, 4, 5, 5], 3);
tester([1, 2, 6], f);
let g = k_missing_positive([2, 3, 4], 3);
tester([1, 5, 6], g);
g = k_missing_positive([-2, -3, 4], 2);
tester([1, 2], g);
