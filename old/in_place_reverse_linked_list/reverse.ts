const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end, prev } from 'cheerio/lib/api/traversing';
import { reverse } from 'dns';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util';
import Heap from 'collections/heap';

class Node {
  value: number;
  next: Node;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let stack = [];
    let x: Node = this;
    while (!!x) {
      stack.push(x.value);
      x = x.next as Node;
    }
    return stack.join(',');
  }
}

function reverse(head: Node): Node {
  let curr = head;
  let prev;
  let next;
  while (!!curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  console.log(prev);
  return prev;
}


const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);


tester('10,8,6,4,2', reverse(head).print_list());