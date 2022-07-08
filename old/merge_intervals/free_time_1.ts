const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'
import Heap from 'collections/heap'
class Interval {
  public start: number;
  public end: number;

  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}



function overlap(a: Interval, b: Interval): boolean {
  if (a.start >= b.start && a.start < b.end) {
    return true;
  }

  if (b.start >= a.start && b.start < a.end) {
    return true;
  }
  return false;
}

function freeTimes(sched: number[][]): Interval[] {
  let schedGaps = [];
  for (let i = 0; i < sched.length - 1; i++) {
    let curr = sched[i];
    let next = sched[i + 1];
    const gap = new Interval(curr[1], next[0]);
    schedGaps.push(gap);
  }
  return schedGaps;
}

function find_employee_free_time(a: number[][][]): number[][] {

  let flattenedShifts = [].concat(...a);
  flattenedShifts.sort((a, b) => a[0] - b[0]);
  flattenedShifts = flattenedShifts.map((a) => new Interval(a[0], a[1]));

  const freeShifts = [];

  for (let i = 0; i < flattenedShifts.length - 1; i++) {
    let curr = flattenedShifts[i];
    let next = flattenedShifts[i + 1];
    if (!overlap(curr, next)) {
      if (curr.end !== next.start) {
        freeShifts.push([curr.end, next.start]);
      }
    }
  }

  return freeShifts;
}

tester([[3, 5]], find_employee_free_time(
  [[[1, 3], [5, 6]], [[2, 3], [6, 8]]]
))
tester([[4, 6], [8, 9]], find_employee_free_time([[[1, 3], [9, 12]], [[2, 4]], [[6, 8]]]))
tester([[5, 7]], find_employee_free_time([[[1, 3]], [[2, 4]], [[3, 5], [7, 9]]]))
