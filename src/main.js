/**
 * This is where all begins
 */
;(function(win, doc, app){

  var $doc = $(doc);

  $doc.ready(function() {
    var Router = new app.Routers.Router();
    Backbone.history.start();
  });

})(window, window.document, window.app || (window.app = {}));