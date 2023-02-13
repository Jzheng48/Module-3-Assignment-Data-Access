const db = require('../config/db.manager');
exports.getAllcustomers = function (req, res) {
db.getAllCustomers().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}