let isUndefined = (value) => {
    return typeof value === 'undefined';
}


let isEmpty = (value) => {
    if (typeof value !== 'string') {
        return value;
    }
    return value.length === 0;
}


module.exports = {
    isUndefined,
    isEmpty
}




