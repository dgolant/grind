const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function searchPairs(target, arr, start, output) {
  let right = arr.length -1;
  let left = start+1;
  while(left < right) {
    const currentSum = arr[left] + arr[right];
    if(currentSum === target) {
      output.push([arr[start], arr[left], arr[right]]);
      left++;
      right--;
      while(left < right && arr[left] === arr[left-1]) {
        left++;
      }
      while(left < right && arr[right] === arr[right+1]) {
        right--;
      }
    } else if(currentSum < target){
      left++; // need larger sum pair
    } else {
      right--; // need smaller sum pair
    }
  }
  return;
};

function search_triplets(numbers) {
  const output = []
  const len = numbers.length
  const sortedNumbers = numbers.sort();
  console.log(sortedNumbers)
  for(let i = 0; i < sortedNumbers.length; i++) {
    const num = sortedNumbers[i];
    if(i > 0 && sortedNumbers[i] === sortedNumbers[i-1]) {
      continue; // if a number is a dupe, skip it. Two numbers that are dupes will always be adjacent
    }
    searchPairs(-sortedNumbers[i], sortedNumbers, i, output);
  }

  return output;
}
