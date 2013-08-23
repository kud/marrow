/**
 * Bootstrap. This is where all begins.
 */
require([
    'raven',
    'modernizr',
    'swfobject',
    'fastclick',
    'ga',
    'helper',
    'routers/router'
], function( Raven, Modernizr, SwfObject, FastClick, Ga, Helper, Workspace) {

    new Workspace();
    Backbone.history.start();
});