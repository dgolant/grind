const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end, prev } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util';
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
function missing_positive(input: number[]): number {
  let j = 0;
  let res = -1;
  while (j < input.length) {
    let k = input[j] - 1;
    if (input[k] !== input[j]) {
      [input[k], input[j]] = [input[j], input[k]];
    } else {
      j++;
    }
  }


  let oneIdx = input.indexOf(1);
  if (oneIdx === -1) {
    return 1;
  }

  for (let i = oneIdx; i < input.length; i++) {
    if (input[i] === undefined || input[i] !== ((input[i - 1] || 0) + 1)) {
      return input[i - 1] + 1;
    }
  }
  return res;
}

let f = missing_positive([-3, 1, 5, 4, 2]);
tester(3, f);
let g = missing_positive([3, -2, 0, 1, 2]);
tester(4, g);
g = missing_positive([3, 2, 5, 1]);
tester(4, g);
f = missing_positive([33, 37, 5]);
tester(1, f);
// f = missing_positive([2, 4, 1, 2]);
// tester([4], missing_positive[2, 3, 2, 1]);
