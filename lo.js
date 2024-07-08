const _ = require("lodash");

const last = (array) => {
  //Returns tha last element of an array
  return array[array.length - 1];
};

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

const findIndex = (array, param) => {
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
