const _ = require("lodash");

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

const last = (array) => {
  //Returns tha last element of an array
  return array[array.length - 1];
};

const findIndex = (array, param, fromIndex = 0) => {
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

const findLastIndex = (array, param, fromIndex = array.length - 1) => {
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

const drop = (array, n = 1) => {
  return array.slice(n);
};
const dropRight = (array, n = 1) => {
  return n === 0 ? array : array.slice(0, -n);
};
