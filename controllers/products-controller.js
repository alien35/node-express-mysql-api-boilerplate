var connection = require('../db');

module.exports = {
    all: function(req, res, next) {
        connection.query('SELECT * from nd_products', function(err, rows, fields) {
            if (!err){
                var response = [];
                response.push({'result' : 'success', 'data' : rows});
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            } else {
                res.status(400).send(err);
            }
        });
    },

    create: function(req, res, next) {
        var response = [];
        if (
            typeof req.body.name !== 'undefined' &&
            typeof req.body.price !== 'undefined'
        ) {
            var name = req.body.name;
            var price = req.body.price;

            connection.query('INSERT INTO nd_products (name, price) VALUES (?, ?)',
                [name, price],
                function(err, result) {
                    if (!err){

                        if (result.affectedRows != 0) {
                            response.push({'result' : 'success'});
                        } else {
                            response.push({'msg' : 'No Result Found'});
                        }

                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).send(JSON.stringify(response));
                    } else {
                        res.status(400).send(err);
                    }
                });

        } else {
            response.push({'result' : 'error', 'msg' : 'Please fill required details'});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response));
        }
    },

    get: function (req,res) {
        var id = req.params.id;
        connection.query('SELECT * from nd_products where id = ?', [id], function (err, rows, fields) {
            if (!err) {
                var response = [];
                if (rows.length != 0) {
                    response.push({'result': 'success', 'data': rows});
                } else {
                    response.push({'result': 'error', 'msg': 'No Results Found'});
                }

                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            } else {
                res.status(400).send(err);
            }
        })
    },

    update: function (req,res) {
        var id = req.params.id, response = [];

        if (
            typeof req.body.name !== 'undefined' &&
            typeof req.body.price !== 'undefined'
        ) {
            var name = req.body.name;
            var price = req.body.price;

            connection.query('UPDATE nd_products SET product_name = ?, product_price = ? WHERE id = ?',
                [name, price, id],
                function(err, result) {
                    if (!err){

                        if (result.affectedRows != 0) {
                            response.push({'result' : 'success'});
                        } else {
                            response.push({'msg' : 'No Result Found'});
                        }

                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).send(JSON.stringify(response));
                    } else {
                        res.status(400).send(err);
                    }
                });
        } else {
            response.push({'result' : 'error', 'msg' : 'Please fill required information'});
            res.setHeader('Content-Type', 'application/json');
            res.send(200, JSON.stringify(response));
        }
    },

    destroy: function (req,res) {
        var id = req.params.id;

        connection.query('DELETE FROM nd_products WHERE id = ?', [id], function(err, result) {
            if (!err){
                var response = [];

                if (result.affectedRows != 0) {
                    response.push({'result' : 'success'});
                } else {
                    response.push({'msg' : 'No Result Found'});
                }

                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            } else {
                res.status(400).send(err);
            }
        });
    }
};