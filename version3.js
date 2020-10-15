function destroyer(arr) {
  const argsArr = [...arguments].slice(1)

  const filteredArr = [];
  for (const el of arr) {
    if (!argsArr.includes(el)) {
      filteredArr.push(el)
    }  
  }
  return filteredArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
