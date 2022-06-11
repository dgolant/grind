const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function pair_with_target_sum(numbers, target) {
  let j = numbers.length - 1;
  let ret = [];
  for(let i = 0; i < j; i++) {
    while(numbers[i]+numbers[j] > target) {
      j--;
    }
    if(numbers[i] + numbers[j] === target) {
      ret = [i,j];
      break;
    }
  }
  return ret;
}

const tester = function (expectation, func) {
  if (func.toString() !== expectation.toString()) {
    console.log({ msg: "BOooooooO!", expectation, output: func });
  } else {
    console.log({ msg: "yay", expectation, output: func });
  }
};

tester([1, 3], pair_with_target_sum([1, 2, 3, 4, 6], 6));
tester([0,2], pair_with_target_sum([2, 5, 9, 11], 11))
