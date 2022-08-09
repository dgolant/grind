const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { tester } from './util';

class TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
  // next: TreeNode;

  constructor(value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
    // this.next = null;
  }
}

function hasSum(root: TreeNode, target: number): boolean {
  if (root === null) {
    return false;
  }
  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === target && !root.left && !root.right) {
    return true;
  }

  return hasSum(root.left, target - root.val) || hasSum(root.right, target - root.val);
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
tester(true, hasSum(root, 23));
tester(false, hasSum(root, 16));