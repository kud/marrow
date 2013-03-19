/**
 * Example of a view object. (http://backbonejs.org/#View)
 */
define([
  'backbone'
], function( Backbone ) {

  return Backbone.View.extend({

    el: '',

    render: function() {
      return this;
    }
  });

});
