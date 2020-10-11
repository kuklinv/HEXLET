// objects merge

import _ from "lodash";
const company = {
    name: null,
    state: 'moderating',
};

const data = {
    name: 'Hexlet',
    state: 'published',
};

const fill = (objectInn, keys, objectData) =>{
const res = _.pick(objectInn, keys);
console.log(res);
}

// Вызовы ниже нужно рассматривать как независимые
fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }

// nested objects!

// const data = {
//     user: 'ubuntu',
//     hosts: {
//         0: {
//             name: 'web1',
//         },
//         1: {
//             name: 'web2',
//             null: 3,
//             active: false,
//         },
//     },
// };
//
// const get = (data:object, keys:any):any => {
// // const getIn = (data, keys) => {
//   let current = data;
//   for (const key of keys) {
//     if (!current.hasOwnProperty(key)) {
//       return null;
//     }
//     current = current[key];
//   }
//
//   return current;
// };
//
// // export default getIn;
// console.log(get(data, ['undefined']));
// console.log(get(data, ['user']));
// console.log(get(data, ['user', 'ubuntu']));
// console.log(get(data, ['hosts', 1, 'name']));
// console.log(get(data, ['hosts', 0]));
// console.log(get(data, ['hosts', 1, null]));
// console.log(get(data, ['hosts', 1, 'active']));

 // null
// 'ubuntu'
// null
 // 'web2'
 // { name: 'web1' }
 // 3
 // false

// object properties // has words checker

// import _ from 'lodash';
//
// const countWords = (text) => {
//     let textArray = _.words(text.toLowerCase());
//     console.log(textArray);
//     const resObj = {};
//
//     for (const word of textArray) {
//         if (!_.has(resObj, word)) {
//             resObj[word] = 1;
//         } else {
//             resObj[word] += 1;
//         }
//     }
// }
//
// const text1 = 'one two three two ONE one wow';
// const text2 = 'another one sentence with strange Words words';
// console.log(countWords(''));
// console.log(countWords(text1));
// console.log(countWords(text2));
// {}
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }

// links

// const is = (cmp1, cmp2) => {
//   if (Object.keys(cmp1).length !== Object.keys(cmp2).length){
//       return false;
//   }
//   if (Object.keys(cmp1).length == 0 && Object.keys(cmp2).length == 0){
//       return true;
//   }
//   for(let key in cmp1){
//       if ((cmp1.hasOwnProperty(key))){
//           if(cmp1[key] !== cmp2[key]){
//               return false;
//           }
//       }
//   }
//     for(let key in cmp2){
//         if ((cmp2.hasOwnProperty(key))){
//             if(cmp2[key] !== cmp1[key]){
//                 return false;
//             }
//         }
//     }
//     return true;
//     }
// using
// const company1 = { name: 'Hexlet', website: 'https://hexlet.io' };
// const company2 = { name: 'CodeBasics', website: 'https://code-basics.com' };
//
//
// const company3 = { name: 'Hexlet', website: 'https://hexlet.io' };
// const company4 = { name: 'Hexlet', website: 'https://hexlet.io' };
//
// const company5 = { name: 'Hexlet', website: 'https://hexlet.io' };
// const company6 = { name: 'Hexlet', website: 'https://code-basics.com' };
//
// console.log(is(company1, company2)); // false
// console.log(is(company3, company4)); //true
// console.log(is(company5, company6)); //false


// modification

// const lesson = {
//   name: 'ДеструКТУРИЗАЦИЯ',
//   description: 'каК удивитЬ колек',
// };
// console.log(lesson);
// const _ = require('lodash');
//
// function normalize (object : object) {
//     let name : string = object.name;
//     let description : string = object.description;
//     object.name = _.capitalize(name);
//     object.description = description.toLocaleLowerCase();
// }
//
// normalize(lesson);
// console.log(lesson)

// export  default normalize;

// hash
//example:
// import { make, set, get } from './map.js';
// const map = make();
// let result = get(map, 'key');
// console.log(result); // => null
// result = get(map, 'key', 'default_value');
// console.log(result); // => "default_value"
// set(map, 'key2', 'value2');
// result = get(map, 'key2');
// console.log(result); // => "value2"
/*
Для внутреннего представления словаря, используйте массив, где индекс содержит хеш записи, а значение — key и value (их можно упаковать в массив).
*/
// function make(){
//     const internal = [];
//     return [internal];
//     // const newMap = [[index],[key, value]];
//     // return newMap;
// }
//
// function get(map, key, defaultValue = null){
//     const hash = crc32.str('key');
//     const index = Math.abs(hash) % 1000;
//     if(map[index]) {
//         return map[index];
//     } else return defaultValue;          /// add collision
// }
//
// function set(map, key, value){
//     const internal = [];
//     const hash = crc32.str('key');
//     const index = Math.abs(hash) % 1000;
//     if(!internal[index]){
//         internal[index] = ['key', 'value'];
//         return true;
//     } else ...... /// add  collision
// }

////8888888888888888888888888888888************* teacher

// // BEGIN
// const getIn = (data, keys) => {
//   let current = data;
//   for (const key of keys) {
//     if (!current.hasOwnProperty(key)) {
//       return null;
//     }
//     current = current[key];
//   }

//   return current;
// };

// export default getIn;
// END


// try last version

// let data = {
//   user: "ubuntu",
//   hosts: {
//     0: {
//       name: "web1"
//     },
//     1: {
//       name: "web2",
//       null: 3,
//       active: false
//     }
//   }
// };
// const getIn = function(objectInn, findKaysArray) {
//   if (
//     findKaysArray.length == 0 ||
//     findKaysArray[0] == null ||
//     findKaysArray[0] == "undefined"
//   ) return null;

//     let i = 0;
//     return recTestKeys(objectInn, findKaysArray, i);

//     function recTestKeys(obj, key, index) {
//       let objInner = key[index];
//       if(obj.hasOwnProperty(objInner)){
//         if(index < findKaysArray.length - 1){
//           index += 1;
//           let tempProp = obj[objInner];
//           return recTestKeys(tempProp, key, index);
//         } else  {
//          return obj[objInner];
//          }
//     } else return null;
//     }
// }

// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null+
// console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' } +
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false

//////////////////// ok its only 1-2 tests ***********************************

// let data = {
//   user: "ubuntu",
//   hosts: {
//     0: {
//       name: "web1"
//     },
//     1: {
//       name: "web2",
//       null: 3,
//       active: false
//     }
//   }
// };
// const getIn = function(objectInn, findKaysArray) {
//   if (
//     findKaysArray.length == 0 ||
//     findKaysArray[0] == null ||
//     findKaysArray[0] == "undefined"
//   ) return null;


//     function recTestKeys(obj, key, i) {
//         if (obj.hasOwnProperty(key[i]) && typeof(key[i]) == 'object') {
//             return recTestKeys(obj[key[i]], key[i], i+1);
//         }
//         else
//             return obj[key];
//     }
//     let i = 0;
//     return recTestKeys(objectInn, findKaysArray[i], i);

// }

// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null
// console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false

//********************************************************* */

// function recTestKeys(obj, keys) {
// var i = 0;
// if (obj.hasOwnProperty(keys[i])) return obj[keys[i]];
//  else if (obj.hasOwnProperty(keys[i])) {
//   return recTestKeys(obj[keys[i]], keys[i + 1]);
// } else return null;
// }

// function recTestKeys(obj, keys){
//   let i = 0;
//   if (obj.hasOwnProperty(keys[i])) {
//     return recTestKeys(obj[keys[i]], keys[i + 1]);
//   } else return obj[keys[i]];

//   }
// }
//   let i = 0;
//   function recTestKeys(obj, keys, i) {
//     if (obj.hasOwnProperty(keys[i])) {
//       return recTestKeys(obj.keys[i], keys[i+1], i+1);
//     } else return obj[keys[i]];
//   // return recTestKeys(objectInn, findKaysArrayToString, i);
//   // return recTestKeys(objectInn, findKaysArray);
//       }
//       // return null;
// };

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ore forEach
// for (const word of words) {
//     if (!_.has(result, word)) {
//       // Инициализация при первом упоминании
//       result[word] = 1;
//     } else {
//       result[word] += 1;
//     }
//   }


// var findKaysArrayToString = findKaysArray.toString().split(","); // any input types => string
// console.log(findKaysArray);
// var kaysArrLen = findKaysArrayToString.length;
//
//let i = 0;
// function recTestKeys(obj: object, keys: any[], index) {
// function recTestKeys(obj, keys) {
//   var i = 0;
//   if (obj.hasOwnProperty(keys[i])) return obj[keys[i]];
//    else if (obj.hasOwnProperty(keys[i])) {
//     return recTestKeys(obj[keys[i]], keys[i + 1]);
//   } else return null;
//   }


// const users = [
//   { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//   { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//   { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//   { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
// ];

// const getSortedNames = (users) => {
//   let resultNames = [];
//   for(let user of users) {
//     resultNames.push(user.name)
//  }
//    return.resultNames.sort();
// }

// // export default getSortedNames;


// getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']

// // const data = {
// //   user: 'ubuntu',
// //   cores: 4,
// //   os: 'linux',
// // };

//     const data = {
//       user: 'ubuntu',
//       os: 'linux',
//       virtual: false,
//     };


// const pick = (data, [...searchKeys]) => {
// 	let result = {};
// 	let dataKeys = Object.keys(data);
// 	searchKeys.forEach((searchKey) => {
//     for(let key of dataKeys){
// 		  if(searchKey == key){
//         result[key] = data[key];
//         // [result.key] = data[key];
//       }
// 	  }
//   });
//   return result;
// }

// // pick(data, ['user']);       // { user: 'ubuntu' }
// // pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
// // pick(data, []);             // {}
// // pick(data, ['none']);       // {}

// pick(data, ['virtual']) // { virtual: false }


// var data = {
//     user: "ubuntu",
//     hosts: {
//         0: {
//             name: "web1"
//         },
//         1: {
//             name: "web2",
//             "null": 3,
//             active: false
//         }
//     }
// };
// var getIn = function (objectInn, findKaysArray) {
//     if (findKaysArray.length == 0 ||
//         findKaysArray[0] == null ||
//         findKaysArray[0] == "undefined")
//         return null;
//     var findKaysArrayToString = findKaysArray.toString().split(","); // any input types => string
//     function recTestKeys(obj, key) {
//         if (obj.hasOwnProperty(key)) {
//             return recTestKeys(obj[key], key);
//         }
//         else
//             return obj[key];
//     }
//     for (var i = 0; i < findKaysArrayToString.length; i++) {
//         recTestKeys(objectInn, findKaysArrayToString[i]);
//     }
// };
// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null//+
// console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false

// if(_.has(objectInn, findKaysArray)) {
//   console.log('yes');
// }

// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null//+
// console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false

// var data = {
//     user: "ubuntu",
//     hosts: {
//         0: {
//             name: "web1"
//         },
//         1: {
//             name: "web2",
//             "null": 3,
//             active: false
//         }
//     }
// };
// var getIn = function (objectInn, findKaysArray) {
//     if (findKaysArray.length == 0 ||
//         findKaysArray[0] == null ||
//         findKaysArray[0] == "undefined")
//         return null;
//     var objectInnKeys = Object.keys(objectInn);
//     for (var j = 0; j < objectInnKeys.length; j++) {
//         var findKey = recTestKeys(objectInnKeys[j]);
//         if (findKey !== null) {
//             if (typeof findKey == "object") {
//                 return getIn(findKey, findKaysArray);
//             }
//             else if (j == findKaysArray.length - 1) {
//                 return findKey;
//             }
//             else {
//                 return null;
//             }
//         } // T
//     }
//     function recTestKeys(key) {
//         for (var i = 0; i < findKaysArray.length; i++) {
//             // console.log(objectInn[key])
//             if (key == findKaysArray[i]) {
//                 return objectInn[key];
//             }
//         }
//         return null; //
//     }
// };
// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null//+
// console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false


// const data = {
//     user: 'ubuntu',
//     hosts: {
//         0: {
//             name: 'web1',
//         },
//         1: {
//             name: 'web2',
//             null: 3,
//             active: false,
//         },
//     },
// };

//// следующая итерация - перестройка алгоритма.
// проверяем совпадение ключей
// если есть то проверяем обьект ли этот ключ, если  - да  - идем внутрь, если нет, то возвращаем значение ключа
//
//
//разбираем 4-й тест!!!!!!!!!!!!!!!!!!!!!!!

// const getIn = (objectInn, findKaysArray) => {
//     if (findKaysArray.length == 0 || findKaysArray[0] == null || findKaysArray[0] == 'undefined') return null;
//     let objectInnKeys = Object.keys(objectInn);
//     for (let j = 0; j < objectInnKeys.length; j++) {
//       let findKey = recTestKeys(objectInnKeys[j]);
//         if (findKey !== null) {
//             if (typeof (findKey) == 'object') {
//                 return getIn(findKey, findKaysArray);
//             } else if (j == findKaysArray.length - 1) {
//                 return findKey;
//             } else {
//                 return null;
//             }
//         } //else return objectInn[objectInnKeys[j]];
//     }


//     function recTestKeys(key) {
//         for (let i = 0; i < findKaysArray.length; i++) {
//             // console.log(objectInn[key])
//             if (key == findKaysArray[i]) {
//                 return objectInn[key];
//             } else return null;
//         }
//     }
// }

// console.log(getIn(data, ['undefined'])); //+
// // getIn(data, ['undefined']); // null
// console.log(getIn(data, ['user'])); // 'ubuntu' //+
// // getIn(data, ['user', 'ubuntu']); // null
// console.log(getIn(data, ['user', 'ubuntu'])); //+
// // getIn(data, ['hosts', 1, 'name']); // 'web2'
// console.log(getIn(data, ['hosts', 1, 'name']));
// // getIn(data, ['hosts', 0]); // { name: 'web1' }
// console.log(getIn(data, ['hosts', 0]));
// // getIn(data, ['hosts', 1, null]); // 3
// console.log(getIn(data, ['hosts', 1, null]));
// // getIn(data, ['hosts', 1, 'active']); // false
// console.log(getIn(data, ['hosts', 1, 'active']));

// // // const getJsonFileData = () => {
// // // //     "common": {
// // // //         "files": [
// // // //             "src/objects.js"
// // // //         ]
// // // //     },
// // // //     "config": {
// // // //         "outdir": "/dist"
// // // //     }
// // // // }
// // // }


// const data = {
//     "common": {
//         "files": [
//             "src/objects.js"
//         ]
//     },
//     "config": {
//         "outdir": "/dist"
//     }
// }

// const getJsonFileData = (data) => {
//     let jsonObj = JSON.stringify(data);
//     console.log(jsonObj);
// }

// getJsonFileData(data);
