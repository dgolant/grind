const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end, prev } from 'cheerio/lib/api/traversing';
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

function convertToIntervals(emp: number[][]): Interval[] {
  let intArr = [];
  for (let i of emp) {
    intArr.push(new Interval(i[0], i[1]));
  }
  return intArr
}

class EmployeeInterval {
  interval: any;
  employeeIndex: any;
  intervalIndex: any;
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval; // interval representing employee's working hours
    // index of the list containing working hours of this employee
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex; // index of the interval in the employee list
  }
}

function find_employee_free_time(s: number[][][]): number[][] {
  let schedLength = s.length;
  let result = [];
  const intervalSched = s.map(e => convertToIntervals(e));

  let minHeap = new Heap([], null, (a, b) => b.interval.start - a.interval.start);
  for (let i in intervalSched) {
    minHeap.push(new EmployeeInterval(intervalSched[i][0], i, 0))
  }
  let prev = minHeap.peek();
  let previousInterval = prev.interval

  while (minHeap.length > 0) {
    let curr = minHeap.pop();
    let currInterval = curr.interval;
    if (currInterval.start - previousInterval.end >= 1) {
      result.push([previousInterval.end, currInterval.start])
    }


    if (intervalSched[curr.employeeIndex] && intervalSched[curr.employeeIndex][curr.intervalIndex + 1]) {
      minHeap.push(new EmployeeInterval(intervalSched[curr.employeeIndex][curr.intervalIndex + 1], curr.employeeIndex, curr.intervalIndex + 1));
    }
    prev = curr;
    previousInterval = curr.interval
  }
  return result
}


tester([[3, 5]], find_employee_free_time(
  [[[1, 3], [5, 6]], [[2, 3], [6, 8]]]
))
tester([[4, 6], [8, 9]], find_employee_free_time([[[1, 3], [9, 12]], [[2, 4]], [[6, 8]]]))
tester([[5, 7]], find_employee_free_time([[[1, 3]], [[2, 4]], [[3, 5], [7, 9]]]))
