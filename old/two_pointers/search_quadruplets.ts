const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function search_pairs(arr, left, right, tg, collector) {
  let start = right+1;
  let end = arr.length-1;
  const partialSum = (arr[left] + arr[right]);
  while(start < end) {
    const sum = arr[start] + arr[end] + partialSum;
    if(sum === tg) {
      collector.push([arr[left], arr[right], arr[start], arr[end]]);
      break;
    } else if(sum < tg) {
      start++;
    } else {
      end--;
    }
  }
}

function search_quadruplets(arr, tg) {
  arr.sort();
  const quads = [];
  for(let i=0; i < arr.length - 3; i++) {
    const diff = tg-arr[i];
    if(i>0 && arr[i] === arr[i-1]) {
      continue;
    }

    for(let j=i+1; j < arr.length - 2; j++) {
      if(j>i+1 && arr[j] === arr[j-1]) {
        continue;
      }
      search_pairs(arr, i, j, tg, quads)
    }

  }
  return quads;
}

const tester = function (expectation, func) {
  if (func.toString() !== expectation.toString()) {
    console.log({ msg: "BOooooooO!", expectation, output: func });
  } else {
    console.log({ msg: "yay", expectation, output: func });
  }
};

tester([[-3, -1, 1, 4], [-3, 1, 1, 2]], search_quadruplets([4, 1, 2, -1, 1, -3], 1));
tester([[-2, 0, 2, 2], [-1, 0, 1, 2]], search_quadruplets([2, 0, -1, 1, -2, 2], 2));
