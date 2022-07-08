const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'
function insert(input: number[][], nr: number[]): number[][] {
  let i = 0
  while (nr[0] > input[i][1]) {
    i++;
  }
  input[i][0] = Math.min(input[i][0], nr[0]);
  input[i][1] = Math.max(input[i][1], nr[1]);

  let j = i + 1;
  while (input[j][0] < input[i][1]) {
    input[i][1] = Math.max(input[i][1], input[j][1]);
    input[j] = [];
  }
  return input.filter(x => x.length > 0)
}

tester([[1, 3], [4, 7], [8, 12]], insert([
  [1, 3],
  [5, 7],
  [8, 12],
], [4, 6]))

tester([[1, 3], [4, 12]], insert([
  [1, 3],
  [5, 7],
  [8, 12],
], [4, 10]))

tester([[1, 4], [5, 7]], insert([[2, 3],
[5, 7],
], [1, 4]));
