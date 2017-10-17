var connection = require('../db');

module.exports.show = function(req, res, next) {
    var response = [];
    response.push({'result' : 'Not Found', 'data' : null});
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify(response));
};