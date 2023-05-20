<script>
  let methods = [
    [
      {'title': 'forEach()'},
      {'methodName': 'array.forEach(func)'},
      {'methodDescription': 'Iterates through an array, invoking a funtion you specify for each element.'},
      {'returnValue': 'Doesn\'t return anything.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'map()'},
      {'methodName': 'array.map(func)'},
      {'methodDescription': 'Iterates through an array, invoking a funtion you specify for each element.'},
      {'returnValue': 'New array containing values returned by function.'},
      {'mutatesArray': 'no'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'filter()'},
      {'methodName': 'array.filter(*func)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'If return value of function is true, it returns an array of matches (subset of the invoked array).'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'find()'},
      {'methodName': 'array.find(*func)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Stops iterating the first time the predicate function finds a matching element and returns that element, otherwise returns undefined.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'findIndex()'},
      {'methodName': 'array.findIndex(*func)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Stops iterating the first time the predicate function finds a matching element and returns the index of that element, otherwise returns -1.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'every()'},
      {'methodName': 'array.every(*func)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Returns true if predicate function returns true for ALL elements in the array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'some()'},
      {'methodName': 'array.some(*func)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Returns true if predicate function returns true for at least ONE element in the array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'reduce()'},
      {'methodName': 'array.reduce(func,initial value)'},
      {'methodDescription': 'Combines elements of an array using a specified function to produce a single value.'},
      {'returnValue': 'Returns a single value - combination of of elements in the array dependig on the specified function.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'reduceRight()'},
      {'methodName': 'array.reduceRight(func,initial value)'},
      {'methodDescription': 'Works like reduce() but processes array from the highest to the lowest index.'},
      {'returnValue': 'Returns a single value - combination of of elements in the array dependig on the specified function.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'flat()'},
      {'methodName': 'array.flat()'},
      {'methodDescription': 'When called with O arguments, it flattens 1 level of nesting. To flatten more levels, pass a number.'},
      {'returnValue': 'Returns the flattened array with the specified degree of nesting.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'flatMap()'},
      {'methodName': 'array.flatMap(func)'},
      {'methodDescription': 'Works like flat() except the returned array is automatically flattened.'},
      {'returnValue': 'Returns the flattened array containing the values returned by the function.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'concat()'},
      {'methodName': 'array.concat()'},
      {'methodDescription': 'Creates new copy of array on which it is invoked, followed by each of the arguments passed to it. Arrays are flattened, but not nested arrays.'},
      {'returnValue': 'Returns new array containing elements of the array on which it is invoked followed by each of the arguments given to it.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'shift()'},
      {'methodName': 'array.shift()'},
      {'methodDescription': 'Removes element from beginning of array.'},
      {'returnValue': 'Returns removed element.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'unshift()'},
      {'methodName': 'array.unshift(item)'},
      {'methodDescription': 'Inserts element into beginning of array.'},
      {'returnValue': 'Returns new length of array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'pop()'},
      {'methodName': 'array.pop()'},
      {'methodDescription': 'Removes element from end of array.'},
      {'returnValue': 'Returns removed element.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'push()'},
      {'methodName': 'array.push(item)'},
      {'methodDescription': 'Inserts element into end of array.'},
      {'returnValue': 'Returns new length of array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'slice()'},
      {'methodName': 'array.slice(start,end)'},
      {'methodDescription': 'Without arguments, creates a copy of the original array. Otherwise, slices an array according to specified start(inclusive) and end(exclusive) arguments.'},
      {'returnValue': 'Returns new sub-array with specified slicing.'},
      {'mutatesArray': 'no'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'splice()'},
      {'methodName': 'array.splice(pos,deleteCount,...items)'},
      {'methodDescription': 'At index pos(inclusive), deletes deleteCount items, inserts items. If deletecount is 0, inserts items without removals.'},
      {'returnValue': 'Returns array of removed items or empty array if no elements were removed.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'fill()'},
      {'methodName': 'array.fill(specified value,start,end)'},
      {'methodDescription': 'Sets the elements of an array, or a slice of an array, to a specified value.'},
      {'returnValue': 'Returns the modified array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'copyWithin()'},
      {'methodName': 'array.copyWithin(destination index,start,end)'},
      {'methodDescription': 'Copies a slice of an array to a new position within the array.'},
      {'returnValue': 'Returns the modified array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'indexOf()'},
      {'methodName': 'array.indexOf(item,*pos)'},
      {'methodDescription': 'Looks for item starting from position *pos.'},
      {'returnValue': 'Returns index of first such element found or -1 if none is found.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'lastIndexOf()'},
      {'methodName': 'array.lastIndexOf(item,*pos)'},
      {'methodDescription': 'Works like indexOf() but looks from end to beginning.'},
      {'returnValue': 'Returns index of first such element found or -1 if none is found.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'sort()'},
      {'methodName': 'array.sort(~func)'},
      {'methodDescription': 'Sorts the array in-place. Without arguments, items are sorted as strings. To sort in any other order, provide a comparison function.'},
      {'returnValue': 'Returns the sorted array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'includes()'},
      {'methodName': 'array.includes(item)'},
      {'methodDescription': 'Checks whether the array contains the item.'},
      {'returnValue': 'Returns true if array has the value, otherwise false.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'reverse()'},
      {'methodName': 'array.reverse()'},
      {'methodDescription': 'Reverses the order of the array in-place.'},
      {'returnValue': 'Returns the reversed array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'join()'},
      {'methodName': 'array.join()'},
      {'methodDescription': 'Creates and returns a new string by concatenating all of the elements in an array,separated by commas or a specified separator string.'},
      {'returnValue': 'Returns a string with all array elements joined.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'entries()'},
      {'methodName': 'array.entries()'},
      {'methodDescription': 'Returns an Array Iterator object with key/value pairs.'},
      {'returnValue': 'Returns an Array Iterator object with key/value pairs.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
  ]
  
</script>
{methods.length}
<header>
  <div>Title</div>
  <div>Code</div>
  <div>Description</div>
  <div>Return Value</div>
  <div>Mutates Array</div>
  <div>Type</div>
</header>
<section>
  {#each methods as method}
    <div>{method[0]['title']}</div>
    <div>{method[1]['methodName']}</div>
    <div>{method[2]['methodDescription']}</div>
    <div>{method[3]['returnValue']}</div>
    <div>{method[4]['mutatesArray']}</div>
    <div>{method[5]['methodType']}</div>
  {/each}
  
</section>

<style>
  header,
  section {
    border: 1px solid rgba(255 255 255 / 0.1);
    display: grid;
    grid-template-columns: repeat(2,1fr) auto auto repeat(2,1fr);
  }
  header div:not(:last-child),
  section div:not(:last-child) {
    border-inline-end: 1px solid rgba(255 255 255 / 0.1);
  }
  section div:not(:last-child) {
    border-block-end: 1px solid rgba(255 255 255 / 0.1);
  }
</style>