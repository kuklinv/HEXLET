// @ts-check
import getFunction from '/JS_functions/functions.js';

const get = getFunction();

// BEGIN (write your solution here)
if (get({ key: 'value' }, 'key') !== 'value') {
    throw new Error('Функция работает неверно!');
}

if (get({}, 'key', 'defaultValue') !== 'defaultValue') {
    throw new Error('Функция работает неверно!');
}

if (get({ key: 'value' }, 'key','defaultValue') !== 'value') {
    throw new Error('Функция работает неверно!');
}

// END
