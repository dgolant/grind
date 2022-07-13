const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { tester } from './util';

class TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
  next: TreeNode;

  constructor(value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  // tree traversal using 'next' pointer
  print_tree() {
    process.stdout.write("Traversal using 'next' pointer: ");
    let current: TreeNode = this;
    while (current !== null) {
      process.stdout.write(`${current.val} `);
      current = current.next;
    }
  }
}

function enqueue(queue: TreeNode[], node: TreeNode) {
  if (node.left) {
    queue.push(node.left);
  }
  if (node.right) {
    queue.push(node.right);
  }
}

function connect_all_siblings(root: TreeNode): TreeNode {
  let queue = [root];

  let finalPrevLevel;
  while (queue.length > 0) {
    const levelSize = queue.length;
    let prev;
    let curr;
    for (let i = 0; i < levelSize; i++) {
      curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      if (!prev && finalPrevLevel) {
        console.log(finalPrevLevel.val);
        finalPrevLevel.next = curr;
      }
      if (prev) {
        prev.next = curr;
      }
      prev = curr;
    }

    finalPrevLevel = curr;
  }
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();
