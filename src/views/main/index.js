// http://backbonejs.org/#View
;(function(win, doc, app){

  /**
   * Main View
   * @type {object}
   */
  app.Views.Main = Backbone.View.extend({

    el: '#main',

    template: this.jst.main,

    events: {
    },

    initialize: function() {
    },

    render: function() {
      this.$el.html(this.template);

      return this;
    }
  });


})(window, window.document, window.app || (window.app = {}));
