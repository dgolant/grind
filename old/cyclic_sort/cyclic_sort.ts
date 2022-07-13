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

function cyclic_sort(input: number[]): number[] {
  for (let i = 0; i < input.length; i++) {
    if (input[i] != i + 1) {
      swap(input, i, input[i] - 1)
    }
  }
  return input
}
tester([1, 2, 3, 4, 5], cyclic_sort([3, 1, 5, 4, 2]));
