import {reverse} from '../JS_test';
import {expect} from "@jest/globals";

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});
