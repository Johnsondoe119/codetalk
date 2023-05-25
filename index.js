//Problem 3

function secondLargestNumber(arr) {
  //We start off the function by setting two variables, first one is ment to hold the largest and the second one ment to hold the second
  let largest = arr[0];
  let secondLargest = arr[1];
  for (let i = 1; i < arr.length; i++) {
    //next it gives us a for loop, starting at index 1 it iterates through the array
    //and as it goes the conditions are
    if (arr[i] > largest) {
      //if the current element is greater than the current largest value
      //than we are going to make that our second largest and make that element equal to largest

      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      //also if the current element is greater than the second largest than we set it
      // equal to the current elements value
      secondLargest = arr[i];
    }
    //lastly we call second largest because we are looking for that value
    return secondLargest;
  }
}
console.log(secondLargestNumber([1, 2, 3, 3, 5, 56, 6, 77, 7, 7, 7]));
