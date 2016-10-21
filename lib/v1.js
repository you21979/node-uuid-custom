'use strict';
var uuid = require('uuid');
var createNodeName = require('./node');

var v1 = module.exports = function(name) {
    return uuid.v1({
        node : createNodeName(name, 6)
    })
}

