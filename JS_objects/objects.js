
// TODO в принципе понятно
// на первой итерации логирует обьект не погружаясь внутрь. нужно проверка не обьект ли это на входе и если  - обьект
// то погружаемся внутрь, когда окказываеться что не обьект - проверяем совпадение ключей и возвращаем или его значение
// или null
//


const data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};

const getIn = (objectInn, findKaysArray) => {
    let objectInnKeys = Object.keys(objectInn);
    objectInnKeys.forEach(function (item) {
        if (typeof (item) == 'object') {
            return getIn(item, findKaysArray);
        } else {
            return recTestKeys(item);
        }
    });


    function recTestKeys(key) {
        for (let i = 0; i < findKaysArray.length; i++) {
            if (key.hasOwnProperty(findKaysArray[i])) {

            }
        }
    }
}

// getIn(data, ['undefined']); // null
// getIn(data, ['user']); // 'ubuntu'
// getIn(data, ['user', 'ubuntu']); // null
getIn(data, ['hosts', 1, 'name']); // 'web2'
  // getIn(data, ['hosts', 0]); // { name: 'web1' }
  // getIn(data, ['hosts', 1, null]); // 3
  // getIn(data, ['hosts', 1, 'active']); // false

// const getIn = (objectInn, findeKaysArray) => {
//     const recTestKeys = key => {
//         for (let i = 0; i <= findeKaysArray.length; i++) {
//             if (key.hasOwnProperty(findeKaysArray[i])) {
//                 return objectInn[findeKaysArray[i]];
//                 // console.log(objectInn[findeKaysArray[i]]);
//             } else {
//                 return null;
//                 // console.log('no such key');
//             }
//         }
//         // return objectInn[findeKaysArray[i]];
//     }
//     console.log(findeKaysArray.length);
//     for (let n = 0; n < findeKaysArray.length; n++) {
//         if (objectInn.hasOwnProperty(findeKaysArray[n])) {
//             console.log(objectInn[findeKaysArray[n]]);
//         } else {
//             for (const key of Object.keys(objectInn)) {
//                 recTestKeys(key);
//             }
//         }
//     }
// }




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
//     let jsonObj = JSON.stringify(data, '\t', 2);
//     console.log(jsonObj);
// }

// getJsonFileData(data);
