const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'

function merge_cells(arr: any[], c, index): number[] | void {

  if (c[1] > arr[index][1]) {
    c[1] = arr[index][1];
    return c;
  } else if (c[1] > arr[index][0]) {
    c[1] = arr[index][0];
    return c;
  }
  return null;
}

function merge(input: number[][]): number[][] {
  let i = 1;
  input.sort((a: number[], b: number[]) => { return a[0] - b[0] });
  let c = [input[0][0], input[0][1]];
  let newArray = [c];
  while (i < input.length) {
    if (input[i][0] <= newArray[newArray.length - 1][1]) {
      newArray[newArray.length - 1][1] = Math.max(newArray[newArray.length - 1][1], input[i][1])
    } else {
      newArray.push(input[i])
    }
    i++;
  }
  return newArray;
}

tester([[1, 5], [7, 9]], merge([[1, 4], [2, 5], [7, 9]]));
tester([[2, 4], [5, 9]], merge([[6, 7], [2, 4], [5, 9]]));
tester([[1, 6]], merge([[1, 4], [2, 6], [3, 5]]));