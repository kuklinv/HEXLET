const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const takeOldest = (usrersArray, userNum = 1) => {

}

let result = takeLast(users);
console.log(result);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];

// const takeLast = (string, numberChar) => {
//     if (string.length === 0 || numberChar > string.length) return null;
//     let vocabulary = string.length - numberChar;
//     let workingString = string.slice(vocabulary)
//     return workingString.split("").reverse().join("");
// }

// console.log(takeLast('hexlet', 4)); // telx


// const uniq = require('lodash');
// import { uniq } from 'lodash';

// const union = (...arrays) => {
//     let startArr = [];
//     const conArray = startArr.concat(...arrays);
//     if (conArray.length === 0) return [];
//     const resArray = uniq(conArray);
//     //  return resArray;
//     console.log(resArray);
// }

// union([3]); // [3]
// union([3, 2], [2, 2, 1]); // [3, 2, 1]
// union(['a', 3, false], [true, false, 3], [false, 5, 8]); // ['a', 3, false, true, 5, 8]
