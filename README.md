# My Lodash Recreation Project

This project aims to recreate some utility functions similar to Lodash using JavaScript. The functions are defined in the `_` object within `index.ts`, and there are corresponding Jest tests located in `__tests__/lodash.test.js`.

## Getting Started

### Clone the repository
```git clone https://github.com/elinoza/my_lodash.git```
```cd my-lodash```

### Install dependencies
```npm install```

### Run tests
```npm run test```

This command runs the Jest tests located in __tests__/lodash.test.js to ensure all functions work as expected.
### Custom Lodash Functions Usage

1. **Importing `_` Object**:
   - Import `_` from `index.js`:
     ```javascript
     const _ = require("../index.js");
     ```

2. **Calling Functions**:
   - Example:
     ```javascript
     _.last([1, 2, 3]); // Returns 3
     ```

3. **Integration Example**:
   ```javascript
   const _ = require("../index.js");

   const array = [1, 2, 3];
   const lastElement = _.last(array);
   console.log("Last element:", lastElement); // Output: Last element: 3



# Functions Included

The functions recreated in this project include:

- `last(array: any[])`
  - Returns the last element of an array.

- `findIndex(array: any[], predicate: Function | any)`
  - Returns the index of the first element in an array that satisfies the provided testing function (predicate).

- `findLastIndex(array: any[], predicate: Function | any)`
  - Returns the index of the last element in an array that satisfies the provided testing function (predicate).

- `drop(array: any[], n: number)`
  - Creates a slice of an array with n elements dropped from the beginning.

- `dropRight(array: any[], n: number)`
  - Creates a slice of an array with n elements dropped from the end.

- `fill(array: any[], value: any, start?: number, end?: number)`
  - Fills elements of an array with a specified value from the start index to the end index.

- `difference(array: any[], ...values: any[])`
  - Creates an array of array values not included in the other given arrays (values) using strict equality for comparisons.

- `chunk(array: any[], size: number)`
  - Creates an array of elements split into groups the length of size.

Feel free to explore and expand this project with additional functions or optimizations!


