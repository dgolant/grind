import { match } from "assert";

const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function find_substring(str, pattern) {
  const freqMap = {};
  let matchedChars = 0;
  let minLength = Number.MAX_VALUE;
  let narrowestRight = 0;
  let narrowestLeft = 0;

  // set up pattern freq map
  for (let i in pattern) {
    const char = pattern[i];
    if (!(char in freqMap)) {
      freqMap[char] = 0;
    }
    freqMap[char]++;
  }

  // do work
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if(rightChar in freqMap) {
      freqMap[rightChar]--;
      if(freqMap[rightChar] === 0) {
        matchedChars++;
      }
    }
    while(allCharsMatch(freqMap, matchedChars)) {
      if(len(left, right) < minLength && allCharsMatch(freqMap, matchedChars)) {
        minLength = len(left, right);
        narrowestLeft = left;
        narrowestRight = right;
      }

      const leftChar = str[left];
      if(leftChar in freqMap) {
        if(freqMap[leftChar] == 0) {
          matchedChars--;
        }
        freqMap[leftChar]++
      }
      left++;
    }
    // console.dir({ right, left, narrowestLeft, narrowestRight, minLength, freqMap})
  }
  if(minLength === Number.MAX_VALUE) {
    return ''
  } else {
    return str.slice(narrowestLeft, narrowestRight+1);
  }
}

const tester = function (expectation, func) {
  if (func.toString() !== expectation.toString()) {
    console.log({ msg: "BOooooooO!", expectation, output: func });
  } else {
    console.log({ msg: "yay", expectation, output: func });
  }
};

/*
create FreqMap. Iterate over string.
when a char is in the freqMap, decrement it. If it becomes 0, increase the matched Chars.
When all possible characters are 0, start shrinking the left.
When the right-left+1 is less than the previous min, record the two positions and the min.
Continue to shrink left after the freq is no longer met.
Restart moving right now that freq condition is no longer met. Continue to the end.
*/
tester('abdec', find_substring('aabdec', 'abc'));
tester('aabdec', find_substring('aabdec', 'abac'));
tester('bca', find_substring('abdbca', 'abc'));
tester('', find_substring('adcad', 'abc'));
