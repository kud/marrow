/**
 * Application bootstrap. This is where all begins.
 */
require([
  'routers/router'
], function( Router ) {

  new Router();
  Backbone.history.start();

});