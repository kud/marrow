/**
 * Configuration of RequireJS. (http://requirejs.org/docs/api.html)
 */
require.config({
  deps: ['app'], // first script executed
  baseUrl: 'scripts', // scripts folders
  // define where libs are
  paths: {
    zepto:          'lib/zepto',
    underscore:     'lib/underscore',
    backbone:       'lib/backbone',
    handlebars:     'lib/handlebars',
    common:         'common'
  },
  // dependances
  shim: {
    'zepto': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [ 'underscore', 'zepto'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'common': {
      exports: 'Common'
    }
  }
});