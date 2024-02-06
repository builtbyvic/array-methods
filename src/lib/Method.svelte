<script>
  let methods = [
    [
      {'title': 'forEach()'},
      {'methodName': 'a.forEach(function)'},
      {'methodDescription': 'Iterates through an array, invoking a funtion you specify for each element.'},
      {'returnValue': 'Doesn\'t return anything.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'map()'},
      {'methodName': 'a.map(function)'},
      {'methodDescription': 'Iterates through an array, invoking a funtion you specify for each element.'},
      {'returnValue': 'New array containing values returned by functiontion.'},
      {'mutatesArray': 'no'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'filter()'},
      {'methodName': 'a.filter(*function)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'If return value of functiontion is true, it returns an array of matches (subset of the invoked array).'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'find()'},
      {'methodName': 'a.find(*function)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Stops iterating the first time the predicate functiontion finds a matching element and returns that element, otherwise returns undefined.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'findIndex()'},
      {'methodName': 'a.findIndex(*function)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Stops iterating the first time the predicate functiontion finds a matching element and returns the index of that element, otherwise returns -1.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'every()'},
      {'methodName': 'a.every(*function)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Returns true if predicate functiontion returns true for ALL elements in the array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'some()'},
      {'methodName': 'a.some(*function)'},
      {'methodDescription': 'Iterates through an array, invoking a predicate funtion for each element.'},
      {'returnValue': 'Returns true if predicate functiontion returns true for at least ONE element in the array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'reduce()'},
      {'methodName': 'a.reduce(function,initial value)'},
      {'methodDescription': 'Combines elements of an array using a specified functiontion to produce a single value.'},
      {'returnValue': 'Returns a single value - combination of of elements in the array dependig on the specified functiontion.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'reduceRight()'},
      {'methodName': 'a.reduceRight(function,initial value)'},
      {'methodDescription': 'Works like reduce() but processes array from the highest to the lowest index.'},
      {'returnValue': 'Returns a single value - combination of of elements in the array dependig on the specified functiontion.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'flat()'},
      {'methodName': 'a.flat()'},
      {'methodDescription': 'When called with O arguments, it flattens 1 level of nesting. To flatten more levels, pass a number.'},
      {'returnValue': 'Returns the flattened array with the specified degree of nesting.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'flatMap()'},
      {'methodName': 'a.flatMap(function)'},
      {'methodDescription': 'Works like flat() except the returned array is automatically flattened.'},
      {'returnValue': 'Returns the flattened array containing the values returned by the functiontion.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'concat()'},
      {'methodName': 'a.concat()'},
      {'methodDescription': 'Creates new copy of array on which it is invoked, followed by each of the arguments passed to it. Arrays are flattened, but not nested arrays.'},
      {'returnValue': 'Returns new array containing elements of the array on which it is invoked followed by each of the arguments given to it.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'array iterator'}
    ],
    [
      {'title': 'shift()'},
      {'methodName': 'a.shift()'},
      {'methodDescription': 'Removes element from beginning of array.'},
      {'returnValue': 'Returns removed element.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'unshift()'},
      {'methodName': 'a.unshift(item)'},
      {'methodDescription': 'Inserts element into beginning of array.'},
      {'returnValue': 'Returns new length of array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'pop()'},
      {'methodName': 'a.pop()'},
      {'methodDescription': 'Removes element from end of array.'},
      {'returnValue': 'Returns removed element.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'push()'},
      {'methodName': 'a.push(item)'},
      {'methodDescription': 'Inserts element into end of array.'},
      {'returnValue': 'Returns new length of array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'stack and queue'}
    ],
    [
      {'title': 'slice()'},
      {'methodName': 'a.slice(start,end)'},
      {'methodDescription': 'Without arguments, creates a copy of the original array. Otherwise, slices an array according to specified start(inclusive) and end(exclusive) arguments.'},
      {'returnValue': 'Returns new sub-array with specified slicing.'},
      {'mutatesArray': 'no'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'splice()'},
      {'methodName': 'a.splice(position,deleteCount,...items)'},
      {'methodDescription': 'At index position(inclusive), deletes deleteCount items, inserts items. If deletecount is 0, inserts items without removals.'},
      {'returnValue': 'Returns array of removed items or empty array if no elements were removed.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'fill()'},
      {'methodName': 'a.fill(specified value,start,end)'},
      {'methodDescription': 'Sets the elements of an array, or a slice of an array, to a specified value.'},
      {'returnValue': 'Returns the modified array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'copyWithin()'},
      {'methodName': 'a.copyWithin(destination index,start,end)'},
      {'methodDescription': 'Copies a slice of an array to a new positionition within the array.'},
      {'returnValue': 'Returns the modified array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'sub-array'}
    ],
    [
      {'title': 'indexOf()'},
      {'methodName': 'a.indexOf(item,*position)'},
      {'methodDescription': 'Looks for item starting from positionition *position.'},
      {'returnValue': 'Returns index of first such element found or -1 if none is found.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'lastIndexOf()'},
      {'methodName': 'a.lastIndexOf(item,*position)'},
      {'methodDescription': 'Works like indexOf() but looks from end to beginning.'},
      {'returnValue': 'Returns index of first such element found or -1 if none is found.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'sort()'},
      {'methodName': 'a.sort(~function)'},
      {'methodDescription': 'Sorts the array in-place. Without arguments, items are sorted as strings. To sort in any other order, provide a comparison functiontion.'},
      {'returnValue': 'Returns the sorted array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'includes()'},
      {'methodName': 'a.includes(item)'},
      {'methodDescription': 'Checks whether the array contains the item.'},
      {'returnValue': 'Returns true if array has the value, otherwise false.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'reverse()'},
      {'methodName': 'a.reverse()'},
      {'methodDescription': 'Reverses the order of the array in-place.'},
      {'returnValue': 'Returns the reversed array.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'join()'},
      {'methodName': 'a.join()'},
      {'methodDescription': 'Creates and returns a new string by concatenating all of the elements in an array,separated by commas or a specified separator string.'},
      {'returnValue': 'Returns a string with all array elements joined.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
    [
      {'title': 'entries()'},
      {'methodName': 'a.entries()'},
      {'methodDescription': 'Returns an Array Iterator object with key/value pairs.'},
      {'returnValue': 'Returns an Array Iterator object with key/value pairs.'},
      {'mutatesArray': 'yes'},
      {'methodType': 'search and sort'}
    ],
  ]
  
</script>
<!-- {methods.length} -->
<header>
  <div>Title</div>
  <div>Code</div>
  <div>Description</div>
  <div>Return Value</div>
</header>
<section>
  {#each methods as method}
    <div>
      <span>{method[0]['title']}</span>
      <div class="tags-wrapper">
        <span>{method[4]['mutatesArray']}</span>
        <span>{method[5]['methodType']}</span>
      </div>
    </div>
    <div>{method[1]['methodName']}</div>
    <div>{method[2]['methodDescription']}</div>
    <div>{method[3]['returnValue']}</div>
  {/each}
  
</section>

<style>
  header {
    border-block-start: 1px solid rgba(255, 255, 255, 0.478);
    border-inline-start: 1px solid rgba(255, 255, 255, 0.478);
    border-inline-end: 1px solid rgba(255, 255, 255, 0.478);
    border-radius: 10px 10px 0 0;
    text-align: center;
  }
  header div:not(:last-child) {
    border-inline-end: 1px solid rgba(255, 255, 255, 0.478);
  }
  section {
    border: 1px solid rgba(255, 255, 255, 0.478);
    border-radius: 0 0 10px 10px;;
   
  }
  header,
  section {
    border: 1px solid rgba(255, 255, 255, 0.478);
    display: grid;
    grid-template-columns: 120px 150px repeat(2,1fr);
  }
  section > div {
    padding: 0.5rem;
    /* overflow-wrap: break-word; */
    border-block-start: 1px solid rgba(255, 255, 255, 0.478);
    word-wrap: break-word;
    /* hyphens: auto; */
    /* word-break: break-word; */
  }
  section > div:not(:nth-child(4n)) {
    border-inline-end: 1px solid rgba(255, 255, 255, 0.478);
  }
  .tags-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .tags-wrapper span {
    align-self: flex-start;
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
  }
  .tags-wrapper span:first-child {
    background: rgba(164, 214, 246, 0.15);
    color: #a5d7f7;
  }
  .tags-wrapper span:last-child {
    background: rgba(142, 236, 207, 0.15);
    color: #8fedd0;
  }
</style>