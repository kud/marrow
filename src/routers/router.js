// http://backbonejs.org/#Router
;(function(win, doc, App){

  /**
   * Router
   * @type {object}
   */
  App.Routers.Router = Backbone.Router.extend({

    routes: {
      '': 'root',
      '*path': 'redirect404' // ALWAYS MUST BE THE LAST ROUTE
    },

    /**
     * Router init
     * @return {void}
     */
    initialize: function() {
    },

    /**
     * Used before every action
     * @return {void}
     */
    before: function() {
    },

    /**
     * Used after every action
     * @return {void}
     */
    after: function() {
    },

    /**
     * @return {void}
     */
    root: function() {
      this.before()

      App.Views.Instances.rootIndex = new App.Views.RootIndex()
      App.Views.Instances.rootIndex.render()

      this.after()
    },

    /**
     * Used when a page isn't found
     * @return {void}
     */
    redirect404: function() {
      console.log('Oops, 404!')
    }

  })

})(window, window.document, window.app || (window.app = {}))
