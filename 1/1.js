function sumExists(xy, k) {
  // get the difference of the current number
  // check for that number in hashmap(Map)
  // if that number exist return true
  let numbersMap = new Map();
 
  for(let i = 0; i < xy.length; i++){
    let mapLocation = xy[i].toString();
    let difference = k - xy[i];
    if(numbersMap.get(difference.toString())){
      return true
    } else {
      numbersMap.set(mapLocation, xy[i])
    }
  }
  return false
}

function test(){
  const actual = sumExists([10, 15, 3, 7], 17)
  const expected = true
  if(actual != expected){
    console.log('TEST FAILED')
  } else {
    console.log('TEST PASSED')
  }
  return
}

test();
