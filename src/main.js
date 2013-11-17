/**
 * This is where all begins
 */
;(function(win, doc, App){

  var $doc = $(doc)

  $doc.ready(function() {
    App.Routers.Instances.router = new App.Routers.Router()
    Backbone.history.start({pushState: true})
  })

})(window, window.document, window.app || (window.app = {}))
