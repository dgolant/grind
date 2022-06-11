const len = (start, end) => end - start + 1;

function find_string_anagrams(str, pattern) {
  const anagramStarts = [];
  const freqMap = {};
  let matchedChars = 0;

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
    if (rightChar in freqMap) {
      freqMap[rightChar]--;
      if (freqMap[rightChar] === 0) {
        matchedChars += 1;
      }
    }

    if (matchedChars === Object.keys(freqMap).length) {
      anagramStarts.push(left);
    }

    if (right >= pattern.length - 1) {
      const leftChar = str[left];
      if (leftChar in freqMap) {
        if (freqMap[leftChar] === 0) {
          matchedChars--;
        }
        freqMap[leftChar]++;
      }
      left++;
    }
    console.dir({freqMap, matchedChars, right, anagramStarts});
  }

  return anagramStarts;
}

const tester = function (expectation, func) {
  if (func.toString() !== expectation.toString()) {
    console.log({ msg: "BOooooooO!", expectation, output: func });
  } else {
    console.log({ msg: "yay", expectation, output: func });
  }
};

tester([3], find_string_anagrams("oidbcaf", "abc"));
tester([], find_string_anagrams("odicf", "dc"));
tester([0], find_string_anagrams("bcdxabcdy", "bcdyabcdx"));
tester([2], find_string_anagrams("aaacb", "abc"));
