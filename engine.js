var dataSet = {};

var getDataSet = function () {
    return dataSet;
};

var storeData = function (key) {
    if (key in dataSet) {
        dataSet[key] = dataSet[key] + 1;
    } else {
        dataSet[key] = 1;
    }
};

module.exports = {
    getDataSet: getDataSet,
    storeData: storeData
};