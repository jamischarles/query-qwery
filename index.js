
/**
 * Module dependencies.
 */

var qwery = require('qwery')
  , query = require('query');

// register engine

query.engine({
  all: qwery,
  one: function(selector, el){
    return qwery(selector, el)[0];
  }
});
