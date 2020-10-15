function destroyer(arr) {
  // console.log(arr);
  // [ 1, 2, 3, 1, 2, 3 ]


  // console.log(arguments);
  // [Arguments] { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }


  // const argsArr = Array.from(arguments);
  // console.log(argsArr)
  // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]

  
  // ANOTHER WAY TO DO IT
  // const argsArr = [...arguments]; //this is called spreading. We're separating all the arguments using commas.
  // console.log(argsArr)
  // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]

  const argsArr = [...arguments].slice(1)

  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!argsArr.includes(arr[i])) {
      filteredArr.push(arr[i])
    }  
  }
  return filteredArr
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

