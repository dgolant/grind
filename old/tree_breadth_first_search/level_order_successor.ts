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

function level_order_successor(root: TreeNode, k: number): TreeNode {
  const queue = [root];
  let successorNext = false;
  while (queue.length > 0) {
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift();

      if (successorNext === true) {
        return curr;
      }

      if (curr.value === k) {
        successorNext = true;
      }

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  return root;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

tester(new TreeNode(4), level_order_successor(root, 3));

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

tester(new TreeNode(10), level_order_successor(root, 9));

tester(new TreeNode(7, 9), level_order_successor(root, 12));
