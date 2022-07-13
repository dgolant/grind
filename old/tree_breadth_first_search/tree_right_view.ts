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

function tree_right_view(root: TreeNode): TreeNode[] {
  let queue = [root];
  let leftNodes = [];
  while (queue.length > 0) {
    let queueLength = queue.length;
    let currentLevel = [];
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      currentLevel.push(curr);
    }

    const x = currentLevel.pop();
    leftNodes.push(x);
  }
  return leftNodes;
}



const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
let result = tree_right_view(root);
process.stdout.write('Tree right view: ');
for (let i = 0; i < result.length; i++) {
  process.stdout.write(`${result[i].val}`);
}