/**
 * Example of a collection. (http://backbonejs.org/#Collection)
 */
define([
    'backbone',
    'models/example'
], function( Backbone, Example ) {

  return Backbone.Collection.extend({
    url: '',
    model: Example
  });
});
