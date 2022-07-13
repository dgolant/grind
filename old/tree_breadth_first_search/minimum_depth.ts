const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { tester } from './util';

class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;


  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // print_list() {
  //   let stack = [];
  //   let x: Node = this;
  //   while (!!x) {
  //     stack.push(x.value);
  //     x = x.next as Node;
  //   }
  //   return stack.join(',');
  // }
}

function enqueue(queue: TreeNode[], node: TreeNode) {
  if (node.left) {
    queue.push(node.left);
  }
  if (node.right) {
    queue.push(node.right);
  }
}

function find_minimum_depth(root: TreeNode): number {

  const queue = [root];
  let levelCounter = 0;
  while (queue.length > 0) {
    const queueLength = queue.length;
    levelCounter++;
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (!curr.left && !curr.right) {
        return levelCounter;
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  return 0;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
tester(2, find_minimum_depth(root));
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
tester(3, find_minimum_depth(root));