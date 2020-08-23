import getFunction from '../src/functions.js';
import {test} from "@jest/globals";
import _ from 'lodash';

const set = getFunction();

test('set1', () => {
    const object = {};
    const copy = _.cloneDeep(object);
    set(copy, 'a[0].b.c', 4);
let {
        a: [
            {
                b: {
                    c: value
                }
            }
        ]
    } = copy;
    expect(value).toBe(4);
})


test('set2', () => {
    const object = {};
    const copy = _.cloneDeep(object);
    set(copy, ['x', '0', 'y', 'z'], 5);
    let value = copy.x[0].y.z
    expect(value).toBe(5);
});

