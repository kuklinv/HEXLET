

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
    const recTestKeys = key => {
        for (let i = 0; i <= findeKaysArray.length; i++) {
            if (key.hasOwnProperty(findeKaysArray[i])) {
                console.log(objectInn[findeKaysArray[i]]);
            } else {
                console.log('no such key');
            }
        }
        // if (typeof (key) !== 'object') {
        //     for (let i = 0; i <= findeKaysArray.length; i++) {
        //         if (key === findeKaysArray[i]) {
        //             console.log(objectInn[key]);
        //         } else console.log('nothing');
        //     }
        // } else recTestKeys(key);
    }
    for (let n = 0; n < findeKaysArray.length; n++) {
        if (objectInn.hasOwnProperty(findeKaysArray[n])) {
            console.log(objectInn[findeKaysArray[n]]);
        } else {
            for (const key of Object.keys(objectInn)) {
                recTestKeys(key);
            }
        }
    }



    // for (const key of Object.keys(objectInn)) {
    //     recTestKeys(key);
    // }
    // console.log(objectInnkeys);
    // for (const key in objectInn) {
    //     // console.log(objectInn[key]);
    //     recTestKeys(key);
    // for (let i = 0; i <= findeKaysArray.length; i++) {
    //     if (key === findeKaysArray[i]) {
    //         console.log(objectInn[key]);
    //     }
    // }
}


// getIn(data, ['undefined']); // null
// getIn(data, ['user']); // 'ubuntu'
// getIn(data, ['user', 'ubuntu']); // null
getIn(data, ['hosts', 1, 'name']); // 'web2'
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
