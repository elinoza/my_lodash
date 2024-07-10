// __tests__/lodash.test.js
const _ = require("../lo.js");

describe("lodash recreation tests", () => {
  test("last function", () => {
    expect(_.last([1, 2, 3])).toBe(3);
    expect(_.last(["a", "b", "c"])).toBe("c");
    expect(_.last([true, false, true])).toBe(true);
    expect(_.last([])).toBeUndefined();
    expect(_.last([null, undefined, 42])).toBe(42);
  });

  test("findIndex function", () => {
    expect(_.findIndex([1, 2, 3, 4], (n) => n > 2)).toBe(2);
    expect(_.findIndex([{ a: 1 }, { a: 2 }], { a: 2 })).toBe(1);
    expect(_.findIndex([{ a: 1 }, { a: 2 }], ["a", 1])).toBe(0);
    expect(_.findIndex([{ a: true }, { a: false }], "a")).toBe(0);
    expect(_.findIndex([1, 2, 3, 4], (n) => n > 4)).toBe(-1);
  });

  test("findLastIndex function", () => {
    expect(_.findLastIndex([1, 2, 3, 4], (n) => n > 2)).toBe(3);
    expect(_.findLastIndex([{ a: 1 }, { a: 2 }, { a: 2 }], { a: 2 })).toBe(2);
    expect(_.findLastIndex([{ a: 1 }, { a: 2 }], ["a", 1])).toBe(0);
    expect(_.findLastIndex([{ a: true }, { a: false }], "a")).toBe(0);
    expect(_.findLastIndex([1, 2, 3, 4], (n) => n > 4)).toBe(-1);
  });

  test("drop function", () => {
    expect(_.drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(_.drop([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(_.drop([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    expect(_.drop([1, 2, 3, 4], 4)).toEqual([]);
    expect(_.drop([], 2)).toEqual([]);
  });

  test("dropRight function", () => {
    expect(_.dropRight([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(_.dropRight([1, 2, 3, 4])).toEqual([1, 2, 3]);
    expect(_.dropRight([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    expect(_.dropRight([1, 2, 3, 4], 4)).toEqual([]);
    expect(_.dropRight([], 2)).toEqual([]);
  });

  test("fill function", () => {
    expect(_.fill([1, 2, 3, 4], "a", 1, 3)).toEqual([1, "a", "a", 4]);
    expect(_.fill([1, 2, 3, 4], "a")).toEqual(["a", "a", "a", "a"]);
    expect(_.fill([1, 2, 3, 4], "a", 1)).toEqual([1, "a", "a", "a"]);
    expect(_.fill(new Array(4), 4)).toEqual([4, 4, 4, 4]);
    expect(_.fill([1, 2, 3, 4], "a", -3, -1)).toEqual([1, "a", "a", 4]);
  });

  test("difference function", () => {
    expect(_.difference([1, 2, 3, 4], [1, 3])).toEqual([2, 4]);
    expect(_.difference([1, 2, 3, 4], [1, 2, 3])).toEqual([4]);
    expect(_.difference([1, 2, 3, 4], [])).toEqual([1, 2, 3, 4]);
    expect(_.difference([1, 2, 3, 4], [1, 2], [3, 4])).toEqual([]);
    expect(_.difference([1, 2, 3, 4], [5, 6])).toEqual([1, 2, 3, 4]);
  });

  test("chunk function", () => {
    expect(_.chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
    expect(_.chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
    expect(_.chunk(["a", "b", "c", "d"], 1)).toEqual([
      ["a"],
      ["b"],
      ["c"],
      ["d"],
    ]);
    expect(_.chunk(["a", "b", "c", "d"], 5)).toEqual([["a", "b", "c", "d"]]);
    expect(_.chunk([], 2)).toEqual([]);
  });
});
