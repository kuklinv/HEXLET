// 08.11.20 today im rebase and restore its branch and its work with jest

import getFunction from "../src/functions.js";
import { beforeEach, test } from "@jest/globals";
import _ from "lodash";

const set = getFunction();

const nativeObject = {};
const object = {};

beforeEach(() => {
  return _.cloneDeep(object);
});

test("set1", () => {
  // const object = {};
  // const copy = _.cloneDeep(object);
  set(object, "a[0].b.c", 4);
  let {
    a: [
      {
        b: { c: value },
      },
    ],
  } = object;
  expect(value).toBe(4);
});

test("set2", () => {
  // const object = {};
  // const copy = _.cloneDeep(object);
  set(object, ["x", "0", "y", "z"], 5);
  let value = object.x[0].y.z;
  expect(value).toBe(5);
});

test("maybeWrong", () => {
  set(object, ["x", "0", "y", "z"], 5);
  nativeObject.key = 5;
  expect(object[0]).toEqual(nativeObject[0]);
});

/*
my be
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
Так ведь там проверяется toEqual, а не toBe. То есть сравнение идет по структуре.
 */

// test('wrongSet1', ()=>{
//     set(object,'a[0].b.c', 4);
//     object.key = '4'
//     expect(object.key).toBe('4');
// });
//
// test('wrongSet2', ()=>{
//     set(object,'a[0].b.c', 4);
//     object[a[0].b.c] = '4'
//     expect(object.key).toBe('4');
// });
