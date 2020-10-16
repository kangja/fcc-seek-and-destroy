// SOLUTION USING ARROW FUNCTION
const destroyer = (...args) => {
  // console.log(args)
  // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ] 

  return args[0].filter(el => !args.slice(1).includes(el));
  
  
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
