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

function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
}


function find_cycle_length(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found the cycle
      return calculate_cycle_length(slow);
    }
  }

  return 0;
}



function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

function find_start(head: Node): number {
  let cl = find_cycle_length(head);
  let slow = head, fast = head;

  for (let i = 0; i < cl; i++) {
    fast = fast.next;
  }

  while (fast !== slow) {
    fast = fast.next,
      slow = slow.next
  }

  return slow.value;
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
tester(3, find_start(head));

// head.next.next.next.next.next.next = head.next.next.next;
// tester(4, find_cycle_length(head));
