/**
 * Router. You define here all your pages. (http://backbonejs.org/#Router)
 */
define([
  'backbone',
], function( Backbone ) {

  return Backbone.Router.extend({

    routes: {
        '': 'root'
    },

    initialize: function() {
    },

    root: function() {
      console.log("I'm the homepage! Yikes!");
    }

  });
});
