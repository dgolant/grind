function searchSums(target, arr, start, diffTracker) {
  const curr = arr[start];
  let right = arr.length -1;
  let left = start+1;
  let closestSum = Number.MAX_SAFE_INTEGER;
  let closestDiff = Number.MAX_SAFE_INTEGER;
  while(left < right) {
    const currentSum = arr[left] + arr[right] + curr;
    const diff = Math.abs(target - currentSum);
    // console.log({ currentSum, diff, target })
    if(diffTracker[diff]) {
      diffTracker[diff] = Math.min(diffTracker[diff], currentSum);
    } else {
      diffTracker[diff] = currentSum
    }

    if(currentSum > target) {
      right--;
    } else {
      left++;
    }
  }
  return diffTracker;
};

function triplet_sum_close_to_target(arr, target) {
  const sorted = arr.sort();
  let diffs = [];
  for(let i = 0; i < sorted.length; i++) {
    const num = sorted[i];
    if(i > 0 && sorted[i] === sorted[i-1]) {
      continue; // if a number is a dupe, skip it. Two numbers that are dupes will always be adjacent
    }
    diffs = searchSums(target, sorted, i, diffs);
  }
  return diffs.filter(l => l !== undefined)[0];
}

tester(1, triplet_sum_close_to_target([-2, 0, 1, 2], 2));
tester(0, triplet_sum_close_to_target([-3, -1, 1, 2], 1));
tester(3, triplet_sum_close_to_target([1, 0, 1, 1], 100));
