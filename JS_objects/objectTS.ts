//// new version (2)  new algorithm
// whats write? =>
// Object.entries() ?
// obj.hasOwnProperty('propertyName') ?
// lodash _.has(object, path)

// lets first check obj.hasOwnProperty

const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1"
    },
    1: {
      name: "web2",
      null: 3,
      active: false
    }
  }
};

const getIn = (objectInn: object, findKaysArray: any[]): any => {
  if (
    findKaysArray.length == 0 ||
    findKaysArray[0] == null ||
    findKaysArray[0] == "undefined"
  )
    return null;
  const findKaysArrayToString: string[] = findKaysArray.toString().split(","); // any input types => string
  const kaysArrLen = findKaysArrayToString.length;
  function recTestKeys(obj: object, keys: any[]) {
    let i: number = 0;
    if (i == kaysArrLen) return obj[keys["i"]];
    if (obj.hasOwnProperty(keys["i"])) {
      return recTestKeys(obj[keys["i"]], keys[i + 1]);
    }
  }
  return recTestKeys(objectInn, findKaysArrayToString);
};

console.log(getIn(data, ["undefined"])); // null //+
console.log(getIn(data, ["user"])); // 'ubuntu' //+
console.log(getIn(data, ["user", "ubuntu"])); // null//+
console.log(getIn(data, ["hosts", 1, "name"])); // 'web2'
console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
console.log(getIn(data, ["hosts", 1, null])); // 3
console.log(getIn(data, ["hosts", 1, "active"])); // false

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
