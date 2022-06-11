const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function remove_duplicates(numbers) {
  let i = 0;
  let nonDup = 1;
  while(i<numbers.length) {
    console.log({ numbers, nonDup, i })
    if(numbers[i] !== numbers[nonDup - 1]) {
      numbers[nonDup] = numbers[i];
      nonDup++;
    }
    i++;
  }
  return nonDup
}

const tester = function (expectation, func) {
  if (func.toString() !== expectation.toString()) {
    console.log({ msg: "BOooooooO!", expectation, output: func });
  } else {
    console.log({ msg: "yay", expectation, output: func });
  }
};

tester(4, remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// tester(2, remove_duplicates([2, 2, 2, 11]))
