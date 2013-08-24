// http://backbonejs.org/#Collection
;(function(win, doc, app){

  /**
   * Example collection
   * @type {object}
   */
  app.collections.Example = Backbone.Collection.extend({
    model: app.models.Example
  });

})(window, window.document, window.app || (window.app = {}));
