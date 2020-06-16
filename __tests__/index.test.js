// import {reverse} from '../JS_test';
// import {expect} from "@jest/globals";
//
// test('reverse', () => {
//     expect(reverse('hello')).toEqual('olleh');
//     expect(reverse('')).toEqual('');
// });

// @ts-check

import getFunction from '../JS_test/tests/functionJest.js';

const without = getFunction();

// BEGIN (write your solution here)
test('without', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(without([2, 1, 2, 3], 4, 5)).toEqual([2,1,2,3]);
    expect(without([],4,5)).toEqual([]);
});
// END

