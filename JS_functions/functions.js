
const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
    { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
    { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
    { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
    { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
    { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
    { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

const getMenCountByYear = (data) => {

}

/*
Реализуйте и экспортируйте по умолчанию функцию getMenCountByYear, которая принимает на вход список
 пользователей и возвращает объект,
в котором ключ это год рождения, а значение это количество мужчин, родившихся в этот год.
 */
getMenCountByYear(users);
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };

// const users = [
//     { name: 'Tirion', birthday: 'Nov 19, 1988' },
//     { name: 'Sam', birthday: 'Nov 22, 1999' },
//     { name: 'Rob', birthday: 'Jan 11, 1975' },
//     { name: 'Sansa', birthday: 'Mar 20, 2001' },
//     { name: 'Tisha', birthday: 'Feb 27, 1992' },
//     { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];
//
// const takeOldest = (usrersArray, userNum = 1) => {
//
// }
//
// let result = takeLast(users);
// console.log(result);
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
