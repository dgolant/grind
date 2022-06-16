const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);
import { end } from 'cheerio/lib/api/traversing';
import { getOriginalNode, idText } from 'typescript';
import { tester } from './util'


function backspace_compare(str1, str2) {

  // build string from end
  // as you iterate, if you see #, decrement a second pointer, i, by however many you've seen.
  // build string using i
  /*

  */
  let i = str1.length - 1;
  let j = str2.length - 1;
  let iDec = false;
  let jDec = false;
  while (i > -1) {
    console.log({ i, j })
    while (str1[i] === '#') {
      i--;
      iDec = true;
    }

    while (str2[j] === '#') {
      j--
      jDec = true;
    }

    if (str1[i] != str2[j]) {
      return false;
    }
    // if (!iDec) {
    //   i--;
    // }
    // if (!jDec) {
    //   j--;
    // }
    // iDec = false;
    // jDec = false;
    i--;
    j--;
  }
  return true;
}
tester(true, backspace_compare('xy#z', 'xzz#'));
// tester(false, backspace_compare('xy#z', 'xyz#'));
// tester(true, backspace_compare('xp#', 'xyz##'));
// tester(true, backspace_compare('xywrrmp', 'xywrrmu#p'));
