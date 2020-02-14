var data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1'
        },
        1: {
            name: 'web2',
            "null": 3,
            active: false
        }
    }
};
var getIn = function (objectInn, findKaysArray) {
    if (findKaysArray.length == 0 || findKaysArray[0] == null || findKaysArray[0] == 'undefined')
        return null;
    var objectInnKeys = Object.keys(objectInn);
    for (var j = 0; j < objectInnKeys.length; j++) {
        var findKey = recTestKeys(objectInnKeys[j]); // TODO: add variable for recTestKeys(objectInnKeys[j])
        if (findKey !== null) {
            if (typeof (findKey) == 'object') {
                return getIn(findKey, findKaysArray);
            }
            else if (j == findKaysArray.length - 1) {
                return findKey;
            }
            else {
                return null;
            }
        }
        return findKey; // TODO: its right?
    }
    function recTestKeys(key) {
        for (var i = 0; i < findKaysArray.length; i++) {
            // console.log(objectInn[key])
            if (key == findKaysArray[i]) {
                return objectInn[key];
            }
        }
        return null; // TODO: its right?
    }
};
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