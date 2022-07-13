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
function corrupt_pair(input: number[]): number[] {
  let j = 0;
  let res = [];
  while (j < input.length) {
    let k = input[j] - 1;
    if (input[k] !== input[j]) {
      [input[k], input[j]] = [input[j], input[k]];
    } else {
      j++;
    }
  }

  console.log(input);
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== i + 1) {
      return [input[i], i + 1];
    }
  }
  return res;
}

let f = corrupt_pair([3, 1, 2, 5, 2]);
tester([2, 4], f);
let g = corrupt_pair([3, 1, 2, 3, 6, 4]);
tester([3, 5], g);
// f = corrupt_pair([2, 4, 1, 2]);
// tester([4], corrupt_pair[2, 3, 2, 1]);
