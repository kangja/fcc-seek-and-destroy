function destroyer(arr) {
   return arr.filter(el => ![...arguments].slice(1).includes(el)); //if argsArr does NOT contain el, then keep it. 
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
