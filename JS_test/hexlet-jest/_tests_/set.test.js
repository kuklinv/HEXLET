import getFunction from '../src/functions.js';
import {beforeEach, test} from "@jest/globals";
import {cloneDeep} from "lodash";

const set = getFunction();

beforeEach(() => {
//     // const object = {};
    const copy = cloneDeep(object);
});

test('set1', () => {
    const object = {};
    set(object, 'a[0].b.c', 4);
    // console.log(object);
    //TODO: need realise object's value
    let {
        a: [
            {
                b: {
                    c: value
                }
            }
        ]
    } = object;
    // const res = a[0].b.c;
    expect(value).toBe(4);
})

test('set2', () => {
    const object = {};
    set(object, ['x', '0', 'y', 'z'], 5);
    // console.log(object);
    //TODO: need realise object's value
    let {
        a: [
            {
                b: {
                    c: value
                }
            }
        ]
    } = object;
    // console.log(a[0]);
    // console.log(b);
    // console.log(c);
    // console.log([c]);

    const res = a[0].b.c;
    // const res = object.[0][][];
    expect(value).toBe(5);
});

