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

function is_palindromic_linked_list(head: Node): boolean {
  let early = head;
  let late = find_middle_of_linked_list(head).next;
  let returnValue = true;

  let reverseHead = reverse_list(late);
  let reverseHeadCopy = reverseHead;

  while (!!reverseHead) {
    if (reverseHead.value !== early.value) {
      returnValue = false;
      break
    }
    early = early.next;
    reverseHead = reverseHead.next;
  }
  let doubleReverseHead = reverse_list(reverseHeadCopy);

  return returnValue;
}

function reverse_list(head: Node): Node {
  let current = head;
  let prev;
  let next;
  while (!!current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

tester(true, is_palindromic_linked_list(head));

head.next.next.next.next.next = new Node(6);
tester(false, is_palindromic_linked_list(head));

head.next.next.next.next.next.next = new Node(7);
tester(false, is_palindromic_linked_list(head));
