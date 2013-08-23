/**
 * @description Static pages
 * @return {object} StaticView
 */
define([
    'zepto',
    'backbone'
], function( $, Backbone ) {

    return Backbone.View.extend({

        el: '#content',

        template: this['jst'],

        /**
         * Render
         * @return {object} Backbone.View
         */
        render: function() {
            this.$el.html(this.template);
            return this;
        },

        /**
         * Legal stuff
         * @return {void}
         */
        showAbout: function() {
            this.template = this.template['static-about'];
            this.render();
        },

        /**
         * Setttings
         * @return {void}
         */
        showSettings: function() {
            this.template = this.template['static-settings'];
            this.render();
        },

        /**
         * What plateforms currently work for this application
         * @return {void}
         */
        showSupportedplatforms: function() {
            this.template = this.template['static-supported-platforms'];
            this.render();
        }
    });

});