
const data = {
    "common": {
        "files": [
            "src/objects.js"
        ]
    },
    "config": {
        "outdir": "/dist"
    }
}

const getJsonFileData = (data) => {
    let jsonObj = JSON.stringify(data, '\t', 2);
    console.log(jsonObj);
}

getJsonFileData(data);
