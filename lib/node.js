'use strict';
var crypto = require('crypto');

var createNodeName = module.exports = function(name, max) {
    return crypto.createHash('sha256').
        update(name, 'utf8').
        digest().
        slice(0, max)
}

