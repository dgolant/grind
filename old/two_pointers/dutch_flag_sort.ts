
function dutch_flag_sort(arr) {
  let low = 0;
  let high = arr.length-1;
  for(let i=0;i<high+1;i++) {

    if(arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
    } else if(arr[i] === 2) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
      i--; // we need i to "stand still" because post-swap the number at position "i" could be anything.
    }
  }
  return arr;
}
