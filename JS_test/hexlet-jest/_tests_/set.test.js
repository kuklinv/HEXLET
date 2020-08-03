import getFunction from '../src/functions.js';
import {test} from "@jest/globals";

const set = getFunction();

// beforeEach(() => {
//     const object = {};
// })

test('set1', () => {
    const object = {};
    set(object, 'a[0].b.c', 4);
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
    const res = a[0].b.c;
    // const res = object.[0][][];
    expect(value).toBe(5);
});

