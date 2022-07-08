const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
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

function print_list(head: Node) {
  while (!!head) {
    console.log(head.value);
    head = head.next;
  }
}

function find_middle(head: Node): Node {
  let curr = head;
  let headCopy = head;
  let len = 1;
  while (!!head) {
    head = head.next;
    len++;
  }

  for (let i = 1; i < Math.max(len / 2); i++) {
    headCopy = headCopy.next;
  }
  return headCopy;
}


function reverse(head: Node): Node {
  let prev;
  let next;
  let curr = head;
  while (!!curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr
    curr = next;
  }
  return prev;
}
function reorder(head: Node) {
  let early = head;
  let late = find_middle(head);
  let reverseHead = reverse(late);

  while (!!reverseHead) {
    let earlyNextTemp = early.next;
    let lateNextTemp = reverseHead.next;
    early.next = reverseHead;
    reverseHead.next = earlyNextTemp;

    reverseHead = lateNextTemp;
    early = earlyNextTemp;
  }

}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
// head.next.next.next.next.next = new Node(12);
reorder(head);
print_list(head);
// tester(true, is_palindromic_linked_list(head));

// head.next.next.next.next.next = new Node(6);
// tester(false, is_palindromic_linked_list(head));

// head.next.next.next.next.next.next = new Node(7);
// tester(false, is_palindromic_linked_list(head));
