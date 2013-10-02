// http://backbonejs.org/#Collection
;(function(win, doc, app){

  /**
   * Example collection
   * @type {object}
   */
  app.Collections.Example = Backbone.Collection.extend({
    model: app.Models.Example
  })

})(window, window.document, window.app || (window.app = {}))
