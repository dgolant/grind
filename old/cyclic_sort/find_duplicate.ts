const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end, prev } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util';
import Heap from 'collections/heap';

// function sort(input): void {
//   let i = 0;
//   while (i < input.length) {
//     const j = input[i] - 1;
//     if (input[i] !== input[j]) {
//       [input[i], input[j]] = [input[j], input[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
// }
function find_duplicate(input: number[]): number {
  let j = 0;

  while (j < input.length) {
    let k = input[j];
    if (k != j + 1) {
      if (input[k] == input[j]) {
        return input[k];
      }
      [input[k], input[j]] = [input[j], input[k]];
    }
    j++;
  }
  return -1;
}

let f = find_duplicate([6, 3, 1, 8, 2, 3, 5, 0]);
tester(3, f);
// f = find_duplicate([2, 4, 1, 2]);
// tester(7, f);
// f = find_duplicate([2, 4, 1, 2]);
// tester([4], find_duplicate[2, 3, 2, 1]);
