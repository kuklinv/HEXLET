
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

//// следующая итерация - перестройка алгоритма.
// проверяем совпадение ключей
// если есть то проверяем обьект ли этот ключ, если  - да  - идем внутрь, если нет, то возвращаем значение ключа
//
//
//разбираем 4-й тест!!!!!!!!!!!!!!!!!!!!!!!

const getIn = (objectInn, findKaysArray) => {
    if (findKaysArray.length == 0 || findKaysArray[0] == null || findKaysArray[0] == 'undefined') return null;
    let objectInnKeys = Object.keys(objectInn);
    for (let j = 0; j < objectInnKeys.length; j++) {
        if (recTestKeys(objectInnKeys[j]) !== null) {
            if (typeof (recTestKeys(objectInnKeys[j])) == 'object') {
                return getIn(recTestKeys(objectInnKeys[j]), findKaysArray);
            } else if (j == findKaysArray.length - 1) {
                return recTestKeys(objectInnKeys[j]);
            } else {
                return null;
            }
        } //else return objectInn[objectInnKeys[j]];
    }


    function recTestKeys(key) {
        for (let i = 0; i < findKaysArray.length; i++) {
            // console.log(objectInn[key])
            if (key == findKaysArray[i]) {
                return objectInn[key];
            } else return null;
        }
    }
}

console.log(getIn(data, ['undefined'])); //+
// getIn(data, ['undefined']); // null
console.log(getIn(data, ['user'])); // 'ubuntu' //+
// getIn(data, ['user', 'ubuntu']); // null
console.log(getIn(data, ['user', 'ubuntu'])); //+
// getIn(data, ['hosts', 1, 'name']); // 'web2'
console.log(getIn(data, ['hosts', 1, 'name']));
// getIn(data, ['hosts', 0]); // { name: 'web1' }
console.log(getIn(data, ['hosts', 0]));
// getIn(data, ['hosts', 1, null]); // 3
console.log(getIn(data, ['hosts', 1, null]));
// getIn(data, ['hosts', 1, 'active']); // false
console.log(getIn(data, ['hosts', 1, 'active']));


    // идут только первые два теста
    // const getIn = (objectInn, findKaysArray) => {
    //     if (findKaysArray.length == 0 || findKaysArray[0] == null || findKaysArray[0] == 'undefined') return null;
    //     let objectInnKeys = Object.keys(objectInn);
    //     for (let j = 0; j < objectInnKeys.length; j++) {
    //         if (typeof (objectInnKeys[j]) == 'object') {
    //             return getIn(k, findKaysArray);
    //         } else if (j == findKaysArray.length - 1) {
    //             return recTestKeys(objectInnKeys[j]);
    //         } else {
    //             return null;
    //         }
    //     }

    // цикл идет по каждому и не останавливаеться при найденном ключе в итоге приходит так или иначе в null
    // выше переписываю пробуя другие методы перебора
    // const getIn = (objectInn, findKaysArray) => {
    //     if (findKaysArray.length == 0 || findKaysArray[0] == null || findKaysArray[0] == 'undefined') return null;
    //     let objectInnKeys = Object.keys(objectInn);
    //     objectInnKeys.forEach(function (item) {
    //         if (typeof (item) == 'object') {
    //             return getIn(item, findKaysArray);
    //         } else {
    //             return recTestKeys(item);
    //         }
    //     });

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
