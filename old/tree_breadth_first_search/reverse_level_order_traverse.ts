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

function reverse_traverse(root: TreeNode): number[][] {
  let queue = [root];
  let levelOrder = [];
  while (queue.length > 0) {
    const currLevel = [];
    let queueLength = queue.length; // the queueLength here is equivalent to the size of the level from the last iteration
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      currLevel.push(curr.value);
    }

    levelOrder.unshift(currLevel);
  }

  return levelOrder;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
tester([[9, 10, 5], [7, 1], [12]], reverse_traverse(root));