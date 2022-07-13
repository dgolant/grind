const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end, prev } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'
import Heap from 'collections/heap'

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  arr[firstIndex] = temp;
}

function missing_number(input: number[]): number {
  for (let i = 0; i < input.length; i++) {
    if (input[i] != i) {
      swap(input, i, input[i])
    }
  }

  return input.indexOf(undefined) + 1;
}

let f = missing_number([4, 0, 3, 1]);
tester(2, f);
f = missing_number([8, 3, 5, 2, 4, 6, 0, 1]);
tester(7, f);
