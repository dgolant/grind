const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { tester } from './util';

class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;
  next: TreeNode;

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current: TreeNode = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.value} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next as TreeNode;
      }
      console.log();
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

function connect_level_order_siblings(root: TreeNode): TreeNode {
  const queue = [root];
  while (queue.length > 0) {
    const currentLevel = [];
    let levelSize = queue.length;
    let curr;
    let prev;
    for (let i = 0; i < levelSize; i++) {
      curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      if (prev) {
        prev.next = curr;
        console.log(prev);
      }
      prev = curr;
    }

  }
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order();
