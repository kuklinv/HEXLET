

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

const getIn = (objectInn, findeKaysArray) => {
    let objectInnkeys = Object.keys(objectInn);
    console.log(objectInnkeys);
    for (const key in objectInnkeys) {
        if (typeof (key) !== 'object') {

            console.log(objectInnkeys[key]);
        }
    }
}

// getIn(data, ['undefined']); // null
getIn(data, ['user']); // 'ubuntu'
  // getIn(data, ['user', 'ubuntu']); // null
  // getIn(data, ['hosts', 1, 'name']); // 'web2'
  // getIn(data, ['hosts', 0]); // { name: 'web1' }
  // getIn(data, ['hosts', 1, null]); // 3
  // getIn(data, ['hosts', 1, 'active']); // false


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
