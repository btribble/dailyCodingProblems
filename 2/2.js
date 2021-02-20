function naiveProductFinder(xy) {
  //Naive approach -- reduce array to get total product
  //Map over given array and divide product by i
  const reducer = (acc, curr) => acc * curr;
  const totalProduct = xy.reduce(reducer);
  const productValues = xy.map((x) => totalProduct / x);
  return productValues;
}

console.log(naiveProductFinder([3, 2, 1]));
console.log(naiveProductFinder([1, 2, 3, 4, 5]));

// What about not using division?

//Each product has a left and right product
function productFinder(xy){
  //work from opposite ends of the array to get the
  const length = xy.length
  const [left, right, answer] = [[],[],[]]

  for(let i=0; i < length - 1; i++) {
    if (i === 0) left.push(1, xy[i])
    else left.push(left[i] * xy[i])
  }

  let rightCounter = 1
  for(let i = length - 1; i > 0; i--) {
    if(i === length - 1) right.push(1, xy[i])
    else {
      right.push(xy[i] * right[rightCounter]);
      rightCounter++
    }
  }

  for(let i=0; i < length; i++) {
    let rightElement = length - (i + 1)
    answer.push(left[i] * right[rightElement])
  }
  
  
  return answer
}
console.log(productFinder([3, 4, 2, 3, 4]));
