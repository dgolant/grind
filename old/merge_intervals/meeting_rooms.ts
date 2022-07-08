const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'
import Heap from 'collections/heap'
class Meeting {
  public start: number;
  public end: number;

  constructor(start, end) {
    this.start = start;
    this.end = end;
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
function meeting_rooms(a: number[][]): number {
  if (a.length == 0) {
    return 0;
  }
  let meetings = a.map(a => new Meeting(a[0], a[1]));
  let i = 0;
  meetings.sort((a, b) => a.start - b.start);


  var minHeap = new Heap([], null, function (a, b) {
    return b.end - a.end;
  });
  let roomsNeeded = 1;
  while (i < meetings.length - 1) {
    while (minHeap.length > 0 && minHeap.peek().end <= meetings[i].start) {
      minHeap.pop();
    }
    minHeap.push(meetings[i]);
    if (minHeap.length > roomsNeeded) {
      roomsNeeded = minHeap.length;
    }
    i++
  }
  return roomsNeeded;
}

tester(2, meeting_rooms([[1, 4], [2, 5], [7, 9]]))
tester(1, meeting_rooms([[6, 7], [2, 4], [8, 12]]))
tester(2, meeting_rooms([[1, 4], [2, 3], [3, 6]]))
tester(2, meeting_rooms([[4, 5], [2, 3], [2, 4], [3, 5]]))