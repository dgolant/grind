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

function level_average(root: TreeNode): number[][] {

  const queue = [root];
  const levelAverages = [];

  while (queue.length > 0) {
    let queueLength = queue.length;
    let currVal = 0;
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      currVal += curr.value / queueLength;
    }

    levelAverages.push(currVal);
  }

  return levelAverages;
}

const root = new TreeNode(12); // normal traverse is 12, 7 1, 9 10 5, 20 17
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
tester([12, 4, 8, 18.5], level_average(root));