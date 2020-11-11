'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.orderPOST = function orderPOST (req, res, next, body) {
  Default.orderPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
