"use strict";

// immediately-invoked function expression
var mySecretObj = function () {
  options = {
    var1: 'a'
  };

  function check(params) {
    console.log('params', params);
  }

  return {
    check: check
  };
}();
//# sourceMappingURL=iife.js.map
