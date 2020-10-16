function destroyer(arr) {
  const argsArr = [...arguments].slice(1)

  const filteredArr = arr.filter(el => !argsArr.includes(el)) //if argsArr does NOT contain el, then keep it. 

  return filteredArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
