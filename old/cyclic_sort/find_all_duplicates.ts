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
function find_duplicate(input: number[]): number[] {
  let j = 0;
  let res = [];
  while (j < input.length) {
    let k = input[j] - 1;
    if (input[k] !== input[j]) {
      [input[k], input[j]] = [input[j], input[k]];
    }
    j++;
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] != i + 1) {
      res.push(input[i]);
    }
  }
  console.log(input);
  return res;
}

let f = find_duplicate([3, 4, 4, 5, 5]);
tester([4, 5], f);
f = find_duplicate([5, 4, 7, 2, 3, 5, 3]);
tester([3, 5], f);
// f = find_duplicate([2, 4, 1, 2]);
// tester([4], find_duplicate[2, 3, 2, 1]);
