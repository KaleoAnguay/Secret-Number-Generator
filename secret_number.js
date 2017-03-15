'use strict';
module.exports = (function secretNumberGenerator() {
  var secretNumber = Math.floor((Math.random() * 1000000) + 1);

    function number(){
        return secretNumber;
      }
    return number;
});