/**
 * Router. You define here all your pages. (http://backbonejs.org/#Router)
 */
define([
  'backbone',
  'models/example',
  'views/index'
], function( Backbone, ExampleModel, IndexView ) {

  return Backbone.Router.extend({

    routes: {
        '': 'root'
    },

    initialize: function() {
    },

    root: function() {
      console.log("I'm the homepage! Yikes!");

      var self = this;

      self.ExampleModel = new ExampleModel();

      self.ExampleModel.fetch({
        error: function() {
            Common.TooltipView.show();
        },
        success: function() {
          self.IndexView = new IndexView({model: self.ExampleModel});
          self.IndexView.render();
        }
      });
    }

  });
});
