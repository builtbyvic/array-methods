const methods = [
  {
    title: "forEach()",
    name: "a.forEach(callback)",
    description:
      "Iterates through an array, invoking a function you specify for each element.",
    returnValue: "No return value. Returns `undefined`.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEachLight.png",
  },
  {
    title: "map()",
    name: "a.map(callback)",
    description:
      "Iterates through an array, invoking a function you specify for each element. The function you pass should RETURN a value.",
    returnValue: "New array containing values returned by the callback function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/mapLight.png",
  },
  {
    title: "filter()",
    name: "a.filter(predicateFunction)",
    description:
      "Iterates through an array, invoking a PREDICATE function for each element.",
    returnValue:
      "If the return value of the function is true/truthy, it returns an array of matches (a subset of the invoked array).",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/filterLight.png",
  },
  {
    title: "find()",
    name: "a.find(predicateFunction)",
    description:
      "Iterates through an array, invoking a PREDICATE function for each element.",
    returnValue:
      "Stops iterating THE FIRST TIME the predicate function finds a matching element and returns THAT ELEMENT, otherwise it returns undefined.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/findLight.png",
  },
  {
    title: "findIndex()",
    name: "a.findIndex(predicateFunction)",
    description:
      "Iterates through an array, invoking a PREDICATE function for each element.",
    returnValue:
      "Stops iterating THE FIRST TIME the predicate function finds a matching element and returns the INDEX OF THAT ELEMENT, otherwise returns -1.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/findIndexLight.png",
  },
  {
    title: "every()",
    name: "a.every(predicateFunction)",
    description:
      "Iterates through an array, invoking a PREDICATE function for each element.",
    returnValue:
      "Returns TRUE if the predicate function returns true for ALL elements in the array, otherwise returns false.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/everyLight.png",
  },
  {
    title: "some()",
    name: "a.some(predicateFunction)",
    description:
      "Iterates through an array, invoking a PREDICATE function for each element.",
    returnValue:
      "Returns TRUE if the predicate function returns true for AT LEAST ONE element in the array.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/someLight.png",
  },
  {
    title: "reduce()",
    name: "*a.reduce(callback,initialValue)",
    description:
      "Combines elements of an array using a specified function to produce a single value.",
    returnValue:
      "Returns a single value - combination of elements in the array depending on the specified function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/reduceLight.png",
  },
  {
    title: "reduceRight()",
    name: "a.reduceRight(callback,initialValue)",
    description:
      "Works like reduce() but processes array from the highest to the lowest index.",
    returnValue:
      "Returns a single value - combination of elements in the array depending on the specified function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/reduceRightLight.png",
  },
  {
    title: "flat()",
    name: "a.flat()",
    description:
      "When called with O arguments, it flattens 1 level of nesting. To flatten more levels, pass a number.",
    returnValue:
      "Returns the flattened array with the specified degree of nesting.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/flatLight.png",
  },
  {
    title: "flatMap()",
    name: "a.flatMap(callback)",
    description:
      "Works like map() except that the returned array is automatically flattened as if passed to flat().",
    returnValue:
      "Returns the flattened array containing the values returned by the function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/flatMapLight.png",
  },
  {
    title: "concat()",
    name: "a.concat()",
    description:
      "Creates a new copy of the array on which it is invoked, followed by each of the arguments passed to it. Arrays are flattened, but not nested arrays.",
    returnValue:
      "Returns a new array containing elements of the array on which it is invoked followed by each of the arguments given to it.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/concatLight.png",
  },
  {
    title: "shift()",
    name: "a.shift()",
    description: "REMOVES the FIRST item of the array.",
    returnValue: "Returns the removed item.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/shiftLight.png",
  },
  {
    title: "unshift()",
    name: "a.unshift(item)",
    description: "ADDS one or more values to the START of an array",
    returnValue: "Returns the new length of the array.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/unshiftLight.png",
  },
  {
    title: "pop()",
    name: "a.pop()",
    description: "Removes the last item on the array.",
    returnValue: "Returns the removed item.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/popLight.png",
  },
  {
    title: "push()",
    name: "a.push(item)",
    description: "ADDS one or more values to the END of an array.",
    returnValue: "Returns the new length of the array.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/pushLight.png",
  },
  {
    title: "slice()",
    name: "*a.slice(start,end)",
    description:
      "Without arguments, it creates a copy of the original array. Otherwise, slices an array according to specified start(inclusive) and end(exclusive) arguments.",
    returnValue: "Returns a new sub-array (of REMOVED items) with the specified slicing.",
    mutatesArray: "no",
    type: "sub-array",
    exampleImage: "/images/sliceLight.png",
  },
  {
    title: "splice()",
    name: "*a.splice(start,deleteCount,...items)",
    description:
      "At index start(inclusive), deletes deleteCount no. of items, then inserts items. If deleteCount is 0, inserts items without removals.",
    returnValue:
      "Returns array of removed items or empty array if no elements were removed.",
    mutatesArray: "yes",
    type: "sub-array",
    exampleImage: "/images/spliceLight.png",
  },
  {
    title: "fill()",
    name: "a.fill(value,start,end)",
    description:
      "Sets the elements of an array, or a slice of an array, to a specified value.",
    returnValue: "Returns the modified array.",
    mutatesArray: "yes",
    type: "sub-array",
    exampleImage: "/images/fillLight.png",
  },
  {
    title: "copyWithin()",
    name: "a.copyWithin(destination index,start,end)",
    description:
      "Copies a slice of an array to a new position within the array. However, it does not change the length of the array.",
    returnValue: "Returns the modified array.",
    mutatesArray: "yes",
    type: "sub-array",
    exampleImage: "/images/copyWithinLight.png",
  },
  {
    title: "indexOf()",
    name: "a.indexOf(item,*position)",
    description: "Looks for the item starting from index *position.",
    returnValue:
      "Returns the index of FIRST such element found or -1 if none is found.",
    mutatesArray: "no",
    type: "search and sort",
    exampleImage: "/images/indexOfLight.png",
  },
  {
    title: "lastIndexOf()",
    name: "a.lastIndexOf(item,*position)",
    description: "Works like indexOf() but looks from end to beginning.",
    returnValue:
      "Returns index of FIRST such element found or -1 if none is found.",
    mutatesArray: "no",
    type: "search and sort",
    exampleImage: "/images/lastIndexOfLight.png",
  },
  {
    title: "sort()",
    name: "a.sort(compareFunction)",
    description:
      "Sorts the array in-place. Without arguments, items are sorted as strings. To sort in any other order, provide a comparison function.",
    returnValue: "Returns the sorted array.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/sortLight.png",
  },
  {
    title: "includes()",
    name: "*a.includes(item,*position)",
    description: "Checks whether the array contains the item.",
    returnValue: "Returns true if array has the value, otherwise false.",
    mutatesArray: "no",
    type: "search and sort",
    exampleImage: "/images/includesLight.png",
  },
  {
    title: "reverse()",
    name: "a.reverse()",
    description: "Reverses the order of the array in-place.",
    returnValue: "Returns the reversed array.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/reverseLight.png",
  },
  {
    title: "join()",
    name: "a.join(separator)",
    description:
      "Creates and returns a new string by concatenating all of the elements in an array,separated by commas or a specified separator string.",
    returnValue: "Returns a string with all array elements joined.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/joinLight.png",
  },
  // {
  //   title: "entries()",
  //   name: "a.entries()",
  //   description: "Returns an Array Iterator object with key/value pairs.",
  //   returnValue: "Returns an Array Iterator object with key/value pairs.",
  //   mutatesArray: "yes",
  //   type: "search and sort",
  //   exampleImage: "/images/forEach.png",
  // },
];

export default methods;
