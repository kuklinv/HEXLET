import _ from 'lodash';

const functions = {
    right1: _.set,
    wrong1: (obj, path, value) => {
        _.set(obj, path, value);
        obj.key = 'value';
        return obj;
    },
    wrong2: (obj, path, value) => {
        obj[path] = value;
        return obj;
    },
};

export default () => {
    const name = process.env.FUNCTION_VERSION || 'right1';
    return functions[name];
};
