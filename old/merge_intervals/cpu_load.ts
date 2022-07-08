const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'
import Heap from 'collections/heap'
class Job {
  public start: number;
  public end: number;
  public load: number

  constructor(start, end, load) {
    this.start = start;
    this.end = end;
    this.load = load;
  }
}



function overlap(a: number[], b: number[]): boolean {
  if (a[0] >= b[0] && a[0] < b[1]) {
    return true;
  }

  if (b[0] >= a[0] && b[0] < a[1]) {
    return true;
  }
  return false;
}

function cpu_load(a: number[][]): number {
  if (a.length == 0) {
    return 0;
  }
  let jobs = a.map(a => new Job(a[0], a[1], a[2]));
  jobs.sort((a, b) => a.start - b.start);

  var minHeap = new Heap([], null, function (a, b) {
    return b.end - a.end;
  });

  let maxLoad = 0;
  let curLoad = 0;
  let i = 0;
  while (i < jobs.length) {
    while (minHeap.length > 0 && minHeap.peek().end <= jobs[i].start) {
      const poppedJob = minHeap.pop();
      curLoad = curLoad - poppedJob.load;
    }
    // console.log({ curLoad, maxLoad, i, j: jobs[i] });
    minHeap.push(jobs[i]);
    curLoad += jobs[i].load;
    maxLoad = Math.max(curLoad, maxLoad)
    i++
  }
  return maxLoad;
}

tester(7, cpu_load([[1, 4, 3], [2, 5, 4], [7, 9, 6]]))
tester(15, cpu_load([[6, 7, 10], [2, 4, 11], [8, 12, 15]]))
tester(8, cpu_load([[1, 4, 2], [2, 4, 1], [3, 6, 5]]))
