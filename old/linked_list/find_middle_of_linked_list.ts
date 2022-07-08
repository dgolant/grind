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

function find_middle_of_linked_list(head: Node): Node {
  let slow = head, fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next;
    if (fast.next) {
      fast = fast.next;
    }
  }
  return slow;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

tester(3, find_middle_of_linked_list(head).value);

head.next.next.next.next.next = new Node(6);
tester(4, find_middle_of_linked_list(head).value);

head.next.next.next.next.next.next = new Node(7);
tester(4, find_middle_of_linked_list(head).value);
