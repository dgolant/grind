
function find_subarrays(arr, target) {
  let output = [];

  for(let i=0; i < arr.length; i++) {
    console.log(i)
    console.log(arr[i]);
    if(arr[i] >= target) {
      continue;
    };
    output.push([arr[i]]);
    let j = i+1;
    let product = arr[i];
    let subArr = [arr[i]];
    while(product < target) {
      if(product*arr[j] < target) {
        product*=arr[j];
        subArr.push(arr[j]);
      } else {
        break;
      }
      j++;
    }
    if(output[output.length-1].toString() !== subArr.toString()){
      output.push(subArr);
    }
  };
  return output;
}
