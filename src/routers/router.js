// http://backbonejs.org/#Router
;(function(win, doc, app){

  /**
   * Router
   * @type {object}
   */
  app.routers.Router = Backbone.Router.extend({

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
      app.views.instances.Main = new app.views.Main();
      app.views.instances.Main.render();
    },

    /**
     * Used when a page isn't found
     * @return {void}
     */
    redirect404: function() {

    }

  });

})(window, window.document, window.app || (window.app = {}));
