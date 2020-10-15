// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// pseudocode


function destroyer(arr) {
  let union = [];
  let diff = [];

  
  const args = Array.from(arguments);
  // console.log(args)
  // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]

  const argsZero = args[0];
  // console.log(argsZero)
  // [ 1, 2, 3, 1, 2, 3 ]

  const argsSlice = args.slice(1);
  // console.log(args.slice(1))
  // [ 2, 3 ]

  for (let i = 0; i < argsZero.length; i++) {
    if (!union.includes(argsZero[i])) {
      union.push(argsZero[i])
    }
  }

  for (let i = 0; i < argsSlice.length; i++) {
    if (!union.includes(argsSlice[i])) {
      union.push(argsSlice[i])
    }
  }

  return union;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
// should return [1].

  

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
// should return [1, 5, 1].

// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))

// destroyer([2, 3, 2, 3], 2, 3) should return [].
// console.log(destroyer([2, 3, 2, 3], 2, 3));

// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].