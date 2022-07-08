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
function intersect(a: number[][], b: number[][]): number[][] {
  let i = 0;
  let j = 0;
  let retArray = [];
  while (!!a[i] && !!b[j]) {
    let aVal = a[i];
    let bVal = b[j];
    if (overlap(aVal, bVal)) {
      const newInterval = [Math.max(aVal[0], bVal[0]), Math.min(aVal[1], bVal[1])];
      retArray.push(newInterval)
    }
    if (aVal[1] < bVal[1]) {
      i++;
    } else {
      j++;
    }
  }

  return retArray
}

tester([[2, 3], [5, 6], [7, 7]], intersect([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]))

tester([[5, 7], [9, 10]], intersect([[1, 3], [5, 7], [9, 12]], [[5, 10]]))
