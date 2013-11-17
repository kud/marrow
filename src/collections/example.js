// http://backbonejs.org/#Collection
;(function(win, doc, App){

  /**
   * Example collection
   * @type {object}
   */
  App.Collections.Examples = Backbone.Collection.extend({
    model: App.Models.Example
  })

})(window, window.document, window.app || (window.app = {}))
