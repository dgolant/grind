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
function all_missing_numbers(input: number[]): number[] {
  let i = 0;
  let res = [];
  sort(input);
  console.log(input);
  let j = 0;

  while (j < input.length) {
    if (input[j] != j + 1) {
      res.push(j + 1);
    }
    j++;
  }
  return res;
}

let f = all_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]);
tester([4, 6, 7], f);
// f = all_missing_numbers([2, 4, 1, 2]);
// tester(7, f);
// f = all_missing_numbers([2, 4, 1, 2]);
// tester([4], all_missing_numbers[2, 3, 2, 1]);
