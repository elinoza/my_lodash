const _ = {
  last(array) {
    return array[array.length - 1];
  },

  findIndex(array, param, fromIndex = 0) {
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
  },

  findLastIndex(array, param, fromIndex = array.length - 1) {
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
  },

  drop(array, n = 1) {
    let newArray = [];
    for (let i = n; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  },

  dropRight(array, n = 1) {
    let newArray = [];
    for (let i = 0; i < array.length - n; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  },

  fill(array, value, start = 0, end = array.length) {
    if (array.length > 0 && array[0] === undefined) {
      let newArray = [];
      for (let i = start; i < end; i++) {
        newArray.push(value);
      }
      return newArray;
    } else {
      for (let i = start; i < end; i++) {
        if (i < 0) {
          array[array.length + i] = value;
        } else {
          array[i] = value;
        }
      }
      return array;
    }
  },

  difference(array, ...values) {
    let concatArray = [];
    if (values.length > 1) {
      for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
          concatArray.push(values[i][j]);
        }
      }
    } else {
      if (values[0].length === 0) {
        return array;
      } else {
        concatArray = [...values[0]];
      }
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
  },

  chunk(array, number = 1) {
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
  },
};
module.exports = _;
