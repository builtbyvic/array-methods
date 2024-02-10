const methods = [
  {
    title: "forEach()",
    name: "a.forEach(function)",
    description:
      "Iterates through an array, invoking a function you specify for each element.",
    returnValue: "Doesn't return anything.",
    mutatesArray: "yes",
    type: "array iterator",
    exampleImage: "/images/forEachLight.png",
  },
  {
    title: "map()",
    name: "a.map(function)",
    description:
      "Iterates through an array, invoking a function you specify for each element.",
    returnValue: "New array containing values returned by function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "filter()",
    name: "a.filter(*function)",
    description:
      "Iterates through an array, invoking a predicate function for each element.",
    returnValue:
      "If return value of function is true, it returns an array of matches (subset of the invoked array).",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "find()",
    name: "a.find(*function)",
    description:
      "Iterates through an array, invoking a predicate function for each element.",
    returnValue:
      "Stops iterating the first time the predicate function finds a matching element and returns that element, otherwise returns undefined.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "findIndex()",
    name: "a.findIndex(*function)",
    description:
      "Iterates through an array, invoking a predicate function for each element.",
    returnValue:
      "Stops iterating the first time the predicate function finds a matching element and returns the index of that element, otherwise returns -1.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "every()",
    name: "a.every(*function)",
    description:
      "Iterates through an array, invoking a predicate function for each element.",
    returnValue:
      "Returns true if predicate function returns true for ALL elements in the array.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "some()",
    name: "a.some(*function)",
    description:
      "Iterates through an array, invoking a predicate function for each element.",
    returnValue:
      "Returns true if predicate function returns true for at least ONE element in the array.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "reduce()",
    name: "a.reduce(function,initial value)",
    description:
      "Combines elements of an array using a specified function to produce a single value.",
    returnValue:
      "Returns a single value - combination of elements in the array dependig on the specified function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "reduceRight()",
    name: "a.reduceRight(function,initial value)",
    description:
      "Works like reduce() but processes array from the highest to the lowest index.",
    returnValue:
      "Returns a single value - combination of elements in the array depending on the specified function.",
    mutatesArray: "no",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
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
    exampleImage: "/images/forEach.png",
  },
  {
    title: "flatMap()",
    name: "a.flatMap(function)",
    description:
      "Works like flat() except the returned array is automatically flattened.",
    returnValue:
      "Returns the flattened array containing the values returned by the function.",
    mutatesArray: "yes",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "concat()",
    name: "a.concat()",
    description:
      "Creates new copy of array on which it is invoked, followed by each of the arguments passed to it. Arrays are flattened, but not nested arrays.",
    returnValue:
      "Returns new array containing elements of the array on which it is invoked followed by each of the arguments given to it.",
    mutatesArray: "yes",
    type: "array iterator",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "shift()",
    name: "a.shift()",
    description: "Removes element from beginning of array.",
    returnValue: "Returns removed element.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "unshift()",
    name: "a.unshift(item)",
    description: "Inserts element into beginning of array.",
    returnValue: "Returns new length of array.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "pop()",
    name: "a.pop()",
    description: "Removes element from end of array.",
    returnValue: "Returns removed element.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "push()",
    name: "a.push(item)",
    description: "Inserts element into end of array.",
    returnValue: "Returns new length of array.",
    mutatesArray: "yes",
    type: "stack and queue",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "slice()",
    name: "a.slice(start,end)",
    description:
      "Without arguments, creates a copy of the original array. Otherwise, slices an array according to specified start(inclusive) and end(exclusive) arguments.",
    returnValue: "Returns new sub-array with specified slicing.",
    mutatesArray: "no",
    type: "sub-array",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "splice()",
    name: "a.splice(position,deleteCount,...items)",
    description:
      "At index position(inclusive), deletes deleteCount items, inserts items. If deletecount is 0, inserts items without removals.",
    returnValue:
      "Returns array of removed items or empty array if no elements were removed.",
    mutatesArray: "yes",
    type: "sub-array",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "fill()",
    name: "a.fill(specified value,start,end)",
    description:
      "Sets the elements of an array, or a slice of an array, to a specified value.",
    returnValue: "Returns the modified array.",
    mutatesArray: "yes",
    type: "sub-array",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "copyWithin()",
    name: "a.copyWithin(destination index,start,end)",
    description:
      "Copies a slice of an array to a new positionition within the array.",
    returnValue: "Returns the modified array.",
    mutatesArray: "yes",
    type: "sub-array",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "indexOf()",
    name: "a.indexOf(item,*position)",
    description: "Looks for item starting from positionition *position.",
    returnValue:
      "Returns index of first such element found or -1 if none is found.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "lastIndexOf()",
    name: "a.lastIndexOf(item,*position)",
    description: "Works like indexOf() but looks from end to beginning.",
    returnValue:
      "Returns index of first such element found or -1 if none is found.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "sort()",
    name: "a.sort(~function)",
    description:
      "Sorts the array in-place. Without arguments, items are sorted as strings. To sort in any other order, provide a comparison function.",
    returnValue: "Returns the sorted array.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "includes()",
    name: "a.includes(item)",
    description: "Checks whether the array contains the item.",
    returnValue: "Returns true if array has the value, otherwise false.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "reverse()",
    name: "a.reverse()",
    description: "Reverses the order of the array in-place.",
    returnValue: "Returns the reversed array.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "join()",
    name: "a.join()",
    description:
      "Creates and returns a new string by concatenating all of the elements in an array,separated by commas or a specified separator string.",
    returnValue: "Returns a string with all array elements joined.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
  {
    title: "entries()",
    name: "a.entries()",
    description: "Returns an Array Iterator object with key/value pairs.",
    returnValue: "Returns an Array Iterator object with key/value pairs.",
    mutatesArray: "yes",
    type: "search and sort",
    exampleImage: "/images/forEach.png",
  },
];

export default methods;
