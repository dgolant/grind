const len = (start, end) => (end - start) + 1;
const keysLengthEquals = (map, length) => Object.keys(map).length === length;
const allCharsMatch = (map, charCount) => keysLengthEquals(map, charCount);

function make_squares(numbers) {
  const output = []
  let upPtr = 0;
  let downPtr;
  while(numbers[upPtr] < 0) {
    upPtr++;
  }
  downPtr = upPtr - 1;

  while(downPtr > 0 || upPtr < numbers.length) {
    let right;
    let left;
    if(downPtr >= 0) {
      left = numbers[downPtr] * numbers[downPtr];
    }

    if(upPtr < numbers.length) {
      right = numbers[upPtr] * numbers[upPtr];
    }
    // console.log({ upPtr, downPtr, right, left})
    if(left != undefined && right != undefined) {
      const min = Math.min(left, right);
      const max = Math.max(left, right);
      output.push(min);
      output.push(max);
    } else {
      const exists = right != undefined ? right : left;
      output.push(exists)
    }

    upPtr++;
    downPtr--;
  }
  return output;
}

// tester([0, 1, 4, 4, 9], make_squares([-2, -1, 0, 2, 3]));
// tester([/0,1,4], make_squares([0, 1, 2]))

// let top = numbers.length - 1;
//   let bottom = 0;
//   const newArray = [];
//   while(bottom < top) {
//     const right = numbers[top] * numbers[top];
//     const left = numbers[bottom] * numbers[bottom];
//     if(right > left) {
//       newArray.unshift(right);
//       top--;
//     }

//     if(left > right) {
//       newArray.unshift(left);
//       bottom++;
//     }

//     if(left == right) {
//       console.log({ bottom, top, })
//       newArray.unshift(right);
//       top--;
//     }
//   }
