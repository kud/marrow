/**
 * Routing
 */
define([
    'views/static/index'
], function(
    StaticView
    ) {

    /**
     * It's all about routing
     * @type {Backbone.Router}
     */
    return Backbone.Router.extend({

        routes: {
            '': 'root',


            '*path': 'redirect404' // ALWAYS MUST BE THE LAST ROUTE
        },

        /**
         * Route init
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

        }

    });

});
