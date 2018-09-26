var engine = require('./engine');

var dataSet = engine.getDataSet();
console.log(dataSet);

engine.storeData('a');
console.log(dataSet);

engine.storeData('b');
engine.storeData('b');
console.log(dataSet);
