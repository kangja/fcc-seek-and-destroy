function destroyer(arr) {
  // console.log(arr);
  // [ 1, 2, 3, 1, 2, 3 ]

  // console.log(arguments);
  // [Arguments] { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }
  console.log(arguments[1])

  console.log(arguments[0])

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
