// const users = [
//   { user: "barney", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];

const last = (array: any) => {
  //Returns tha last element of an array
  return array[array.length - 1];
};

const findIndex = (array: any, param: any, fromIndex: number = 0) => {
  for (let i = 0; i < array.length; i++) {
    if (typeof param === "function") {
      if (param(array[i])) {
        return i;
      }
    } else if (typeof param === "object" && !Array.isArray(param)) {
      let match = true;
      for (const property in param) {
        if (array[i][property] !== param[property]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    } else if (Array.isArray(param)) {
      const key = param[0];
      const value = param[1];
      if (array[i][key] === value) {
        return i;
      }
    } else if (typeof param === "string") {
      const key = param;
      if (array[i][key] === true) {
        return i;
      }
    }
  }
  return -1;
};

const findLastIndex = (
  array: any,
  param: any,
  fromIndex: number = array.length - 1
) => {
  for (let i = fromIndex; i > -1; i--) {
    if (typeof param === "function") {
      if (param(array[i])) {
        return i;
      }
    } else if (typeof param === "object" && !Array.isArray(param)) {
      let match = true;
      for (const property in param) {
        if (array[i][property] !== param[property]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    } else if (Array.isArray(param)) {
      const key = param[0];
      const value = param[1];
      if (array[i][key] === value) {
        return i;
      }
    } else if (typeof param === "string") {
      const key = param;
      if (array[i][key] === true) {
        return i;
      }
    }
  }
  return -1;
};

const drop = (array: any, n: number = 1) => {
  let newArray = [];
  for (let i = n; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const dropRight = (array: any, n: number = 1) => {
  let newArray = [];
  for (let i = 0; i < array.length - n; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const fill = (
  array: any,
  value: any,
  start: number = 0,
  end: number = array.length
) => {
  if (array.length > 0 && array[0] === undefined) {
    let newArray = [];
    for (let i = start; i < end; i++) {
      newArray.push(value);
    }
    return newArray;
  } else {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }
};

const difference = (array: any, ...values: any) => {
  let concatArray = [];
  if (values.length > 0) {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        concatArray.push(values[i][j]);
      }
    }
  } else {
    concatArray = [...array];
  }
  let difference = [];
  for (let i = 0; i < array.length; i++) {
    let isUnique = false;
    for (let j = 0; j < concatArray.length; j++) {
      if (array[i] === concatArray[j]) {
        isUnique = false;
        break;
      } else {
        isUnique = true;
      }
    }
    if (isUnique) {
      difference.push(array[i]);
    }
  }
  return difference;
};

const chunk = (array: any, number: number = 1) => {
  let newArray = [];
  if (number > 0) {
    let subArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (j === number) {
        j = 0;
        newArray.push(subArray);
        subArray = [];
      }
      subArray.push(array[i]);
      j += 1;
    }
    if (subArray.length > 0) {
      newArray.push(subArray);
    }
  }
  return newArray;
};

//console.log(difference([1, 2, 3, 4, 5, 7], [1, 3], [2, 4], [8]));
//console.log(difference([1, 2, 3, 4, 5], [1, 2, 3]));
//console.log(chunk(["a", "b", "c", "d", "e", "f", "g"]));
console.log(
  dropRight([1, 2, 3]),

  dropRight([1, 2, 3], 2),
  // => [3]

  dropRight([1, 2, 3], 5),
  // => []

  dropRight([1, 2, 3], 0)
);
