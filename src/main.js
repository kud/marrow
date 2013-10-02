/**
 * This is where all begins
 */
;(function(win, doc, app){

  var $doc = $(doc)

  $doc.ready(function() {
    app.Routers.Instances.router = new app.Routers.Router()
    Backbone.history.start({pushState: true})
  })

})(window, window.document, window.app || (window.app = {}))