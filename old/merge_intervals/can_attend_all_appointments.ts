const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'

function overlap(a: number[], b: number[]): boolean {
  if (a[0] >= b[0] && a[0] <= b[1]) {
    return true;
  }

  if (b[0] >= a[0] && b[0] <= a[1]) {
    return true;
  }
  return false;
}
function can_attend_all_appointements(a: number[][]): boolean {
  let i = 0;
  a.sort((a, b) => a[0] - b[0]);
  while (i < a.length - 1) {
    if (overlap(a[i], a[i + 1])) {
      return false;
    }
    i++;
  }
  return true
}

tester(false, can_attend_all_appointements([[1, 4], [2, 5], [7, 9]]))
tester(true, can_attend_all_appointements([[6, 7], [2, 4], [8, 12]]))
tester(false, can_attend_all_appointements([[4, 5], [2, 3], [3, 6]]))