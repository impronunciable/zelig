
var Zelig = require('convolve')
  , filters = require('./filters');

module.exports = Zelig;

for(var f in filters) {
  (function(f, filter){
    Zelig[f] = function() {
      return new Zelig(filters[f]);
    };
  })(f, filters);
}
