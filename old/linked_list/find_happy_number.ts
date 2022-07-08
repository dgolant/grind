const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'

class Node {
  value: number;
  next: Node;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function find_happy_number(input: number): boolean {
  let slow = input;
  let fast = input;
  while (true) {
    slow = make_square_sum(slow);
    fast = make_square_sum(make_square_sum(fast));

    if (fast === slow) {
      break;
    }
  }
  return slow === 1;
}

function make_square_sum(input: number): number {
  let digits = input.toString().split('');
  return digits.reduce((sum, d) => {
    return sum + (Number(d) * Number(d));
  }, 0);
}
tester(true, find_happy_number(23));
tester(false, find_happy_number(12));

// head.next.next.next.next.next.next = head.next.next.next;
// tester(4, find_cycle_length(head));
