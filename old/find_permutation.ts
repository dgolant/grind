const len = (start, end) => (end - start) +1;

function find_permutation(str, pattern) {
    const freqMap = {};
    let matchedChars = 0;
    for(let i in pattern) {
        const char = pattern[i]
        if(!(char in freqMap)) {
            freqMap[char] = 0;
        }
        freqMap[char]++;
    }
    let left = 0
    for(let right = 0; right < str.length; right++) {
        const rightChar = str[right];
        if(rightChar in freqMap) {
            freqMap[rightChar]--;
            if (freqMap[rightChar] === 0) {
              matchedChars += 1;
            }
        }

        if(matchedChars === Object.keys(freqMap).length) {
            return true;
        }

        if(right >= pattern.length - 1) {
            const leftChar = str[left]
            if(leftChar in freqMap) {
              if(freqMap[leftChar] === 0) {
                matchedChars--;
              }
              freqMap[leftChar]++;
            }
            left++;
        }
console.dir(freqMap)
    }

    return false;
}


const tester = function (expectation, func) {
    if(func !== expectation) {
        console.log({msg: 'BOooooooO!', expectation, output: func});
    } else {
        console.log({msg: 'yay', expectation, output: func})
    }
}

tester(true, find_permutation('oidbcaf', 'abc'));
tester(false, find_permutation('odicf', 'dc'));
tester(true, find_permutation('bcdxabcdy', 'bcdyabcdx'));
tester(true, find_permutation('aaacb', 'abc'));

