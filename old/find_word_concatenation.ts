const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function find_word_concatenation(str, patterns) {
  const freqMap = {};
  const patternLength = patterns[0].length;
  const numPatterns = patterns.length;
  const indices = [];
  let matchedWords = 0;
  for(let i = 0; i < patterns.length; i++) {
    if(!freqMap[patterns[i]]) {
      freqMap[patterns[i]]=0
    }
    freqMap[patterns[i]]++;
  }

  for(let left=0; left< (str.length - (numPatterns*patternLength))+1; left++) {
    const wordsSeen = {};
    for(let right=0; right<numPatterns; right++) {
      const nextWordIndex = left + right * patternLength;
      const word = str.substring(nextWordIndex, nextWordIndex + patternLength);

      if(!(word in freqMap)) {
        break;
      }

      if(!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word]++;

      if(wordsSeen[word] > (freqMap[word] || 0)) {
        break;
      }
      if(right+1 === numPatterns) {
        indices.push(left)
      }
    }
  }
  return indices
}

const tester = function (expectation, func) {
  if (func.toString() !== expectation.toString()) {
    console.log({ msg: "BOooooooO!", expectation, output: func });
  } else {
    console.log({ msg: "yay", expectation, output: func });
  }
};

tester([0, 3], find_word_concatenation('catfoxcat', ['cat', 'fox']));
tester([3], find_word_concatenation('catcatfoxfox', ['cat', 'fox']))
// tester(["catfox"], find_word_concatenation('catcatfoxfox', ['cat', 'fox']));
