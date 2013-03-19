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

      this.ExampleModel = new ExampleModel({
        title: "This is my first Backbone project",
        paragraph: "I'm a JavaScript superstar, don't you think?!"
      });

      this.IndexView = new IndexView({model: this.ExampleModel});
      this.IndexView.render();
    }

  });
});
