var express = require('express');

/* connect modules */
var config = require('config');

/* connect models */
var Configs = require('../models/configs');

exports.welcome = function(req, res) {
    Configs.find({ name: 'projectConfigs' }, ' version developmentStatus dataObjects updated_at', function(err, docs) {
        if (docs.length != 0) {
            res.status(200).send(docs);
        }
        if (err) {
            res.status(500).send({ message: err });
        }
    });
};