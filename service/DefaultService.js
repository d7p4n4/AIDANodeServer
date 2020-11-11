'use strict';


/**
 * Új megrendelés
 *
 * body Request 
 * returns success
 **/
exports.orderPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "identifier" : 42
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

