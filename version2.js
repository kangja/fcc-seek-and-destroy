function destroyer(arr) {
  // const argsArr = Array.from(arguments);
  // console.log(argsArr)
  // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]

  // ANOTHER WAY TO DO IT
  const argsArr = [...arguments]; //this is called spreading. We're separating all the arguments using commas.
  console.log(argsArr)
  // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]

    
    
  // console.log(arr);
  // [ 1, 2, 3, 1, 2, 3 ]

  // console.log(arguments);
  // [Arguments] { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }
  


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
