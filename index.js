// const users = [
//   { user: "barney", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var last = function (array) {
    //Returns tha last element of an array
    return array[array.length - 1];
};
var findIndex = function (array, param, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = 0; i < array.length; i++) {
        if (typeof param === "function") {
            if (param(array[i])) {
                return i;
            }
        }
        else if (typeof param === "object" && !Array.isArray(param)) {
            var match = true;
            for (var property in param) {
                if (array[i][property] !== param[property]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i;
            }
        }
        else if (Array.isArray(param)) {
            var key = param[0];
            var value = param[1];
            if (array[i][key] === value) {
                return i;
            }
        }
        else if (typeof param === "string") {
            var key = param;
            if (array[i][key] === true) {
                return i;
            }
        }
    }
    return -1;
};
var findLastIndex = function (array, param, fromIndex) {
    if (fromIndex === void 0) { fromIndex = array.length - 1; }
    for (var i = fromIndex; i > -1; i--) {
        if (typeof param === "function") {
            if (param(array[i])) {
                return i;
            }
        }
        else if (typeof param === "object" && !Array.isArray(param)) {
            var match = true;
            for (var property in param) {
                if (array[i][property] !== param[property]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i;
            }
        }
        else if (Array.isArray(param)) {
            var key = param[0];
            var value = param[1];
            if (array[i][key] === value) {
                return i;
            }
        }
        else if (typeof param === "string") {
            var key = param;
            if (array[i][key] === true) {
                return i;
            }
        }
    }
    return -1;
};
var drop = function (array, n) {
    if (n === void 0) { n = 1; }
    var newArray = [];
    for (var i = n; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};
var dropRight = function (array, n) {
    if (n === void 0) { n = 1; }
    var newArray = [];
    for (var i = 0; i < array.length - n; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};
var fill = function (array, value, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = array.length; }
    if (array.length > 0 && array[0] === undefined) {
        var newArray = [];
        for (var i = start; i < end; i++) {
            newArray.push(value);
        }
        return newArray;
    }
    else {
        for (var i = start; i < end; i++) {
            array[i] = value;
        }
        return array;
    }
};
var difference = function (array) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var concatArray = [];
    if (values.length > 0) {
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < values[i].length; j++) {
                concatArray.push(values[i][j]);
            }
        }
    }
    else {
        concatArray = __spreadArrays(array);
    }
    var difference = [];
    for (var i = 0; i < array.length; i++) {
        var isUnique = false;
        for (var j = 0; j < concatArray.length; j++) {
            if (array[i] === concatArray[j]) {
                isUnique = false;
                break;
            }
            else {
                isUnique = true;
            }
        }
        if (isUnique) {
            difference.push(array[i]);
        }
    }
    return difference;
};
var chunk = function (array, number) {
    if (number === void 0) { number = 1; }
    var newArray = [];
    if (number > 0) {
        var subArray = [];
        var j = 0;
        for (var i = 0; i < array.length; i++) {
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
console.log(dropRight([1, 2, 3]), dropRight([1, 2, 3], 2), 
// => [3]
dropRight([1, 2, 3], 5), 
// => []
dropRight([1, 2, 3], 0));
