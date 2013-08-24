/**
 * This is where all begins
 */
;(function(win, doc, app){

  var $doc = $(doc);

  $doc.ready(function() {
    app.routers.instances.Router = new app.routers.Router();
    Backbone.history.start();
  });

})(window, window.document, window.app || (window.app = {}));