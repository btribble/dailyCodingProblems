//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//E.X. given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function sumExists(xy, k) {
  // get the difference of the current number
  // check for that number in hashmap(Map)
  // if that number exist return true
  let numbersMap = new Map();
  xy.forEach((x) => {
    let difference = k - x;
    if (difference) {
      let exists = numbersMap.get(difference);
    }
  });
  return false;
}
