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
function make() {
    var newMap = [[index], [key, value]];
    return newMap;
}
// try last version
var data = {
    user: "ubuntu",
    hosts: {
        0: {
            name: "web1"
        },
        1: {
            name: "web2",
            "null": 3,
            active: false
        }
    }
};
var getIn = function (objectInn, findKaysArray) {
    if (findKaysArray.length == 0 ||
        findKaysArray[0] == null ||
        findKaysArray[0] == "undefined")
        return null;
    var i = 0;
    return recTestKeys(objectInn, findKaysArray[i], index);
    function recTestKeys(obj, key, index) {
        if (obj.hasOwnProperty(key)) {
            var objInner = key;
            return recTestKeys(objectInn);
        }
        else
            return null;
    }
};
console.log(getIn(data, ["undefined"])); // null //+
console.log(getIn(data, ["user"])); // 'ubuntu' //+
console.log(getIn(data, ["user", "ubuntu"])); // null
console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
console.log(getIn(data, ["hosts", 1, null])); // 3
console.log(getIn(data, ["hosts", 1, "active"])); // false
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
// const  getIn = (data, [...searchKeys]) => {
// }
// // export default getIn;
// getIn(data, ['undefined']); // null
// getIn(data, ['user']); // 'ubuntu'
// getIn(data, ['user', 'ubuntu']); // null
// getIn(data, ['hosts', 1, 'name']); // 'web2'
// getIn(data, ['hosts', 0]); // { name: 'web1' }
// getIn(data, ['hosts', 1, null]); // 3
// getIn(data, ['hosts', 1, 'active']); // false
// import { make, set, get } from './map.js';
//
// const map = make();
// let result = get(map, 'key');
// console.log(result); // => null
//
// result = get(map, 'key', 'default_value');
// console.log(result); // => "default_value"
//
// set(map, 'key2', 'value2');
// result = get(map, 'key2');
// console.log(result); // => "value2"
//
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
// //// new version (2)  new algorithm
// // whats write? =>
// // Object.entries() ?
// // obj.hasOwnProperty('propertyName') ?
// // lodash _.has(object, path)
//
// // lets first check obj.hasOwnProperty
//
// const data = {
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
//
// const getIn = (objectInn: object, findKaysArray: any[]): any => {
//   if (
//     findKaysArray.length == 0 ||
//     findKaysArray[0] == null ||
//     findKaysArray[0] == "undefined"
//   )
//     return null;
//   const findKaysArrayToString: string[] = findKaysArray.toString().split(","); // any input types => string
//   const kaysArrLen = findKaysArrayToString.length;
//   // TODO: may be try this? (look at comments)
//   //let i = 0;
//   // function recTestKeys(obj: object, keys: any[], index) {
//   function recTestKeys(obj: object, keys: any[]) {
//     let i: number = 0;
//     if (obj.hasOwnProperty(keys[i]) && i == kaysArrLen - 1) return obj[keys[i]];
//     else if (obj.hasOwnProperty(keys[i])) {
//       return recTestKeys(obj[keys[i]], keys[i + 1]);
//     } else return null;
//   }
//   // return recTestKeys(objectInn, findKaysArrayToString, i);
//   return recTestKeys(objectInn, findKaysArrayToString);
// };
//
// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null//+
// console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false
/// pervious version  look at +/-
// const data = {
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
// const getIn = (objectInn: object, findKaysArray: any[]): any => {
//   if (
//     findKaysArray.length == 0 ||
//     findKaysArray[0] == null ||
//     findKaysArray[0] == "undefined"
//   )
//     return null;
//   let objectInnKeys: Array<any> = Object.keys(objectInn);
//   for (let j = 0; j < objectInnKeys.length; j++) {
//     let findKey: string = recTestKeys(objectInnKeys[j]);
//     if (findKey !== null) {
//       if (typeof findKey == "object") {
//         return getIn(findKey, findKaysArray);
//       } else if (j == findKaysArray.length - 1) {
//         return findKey;
//       } else {
//         return [findKey]; //
//       }
//     } //
//   }
//   function recTestKeys(key: any) {
//     for (let i = 0; i < findKaysArray.length; i++) {
//       // console.log(objectInn[key])
//       if (key == findKaysArray[i]) {
//         return objectInn[key];
//       }
//     }
//     return null; //
//   }
// };
// console.log(getIn(data, ["undefined"])); // null //+
// console.log(getIn(data, ["user"])); // 'ubuntu' //+
// console.log(getIn(data, ["user", "ubuntu"])); // null//  not work with 'else {return [find kay} in last if...else'
// console.log(getIn(data, ["hosts", 1, "name"])); // +  'web2'
// console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
// console.log(getIn(data, ["hosts", 1, null])); // 3
// console.log(getIn(data, ["hosts", 1, "active"])); // false
