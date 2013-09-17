/*global module:false*/
module.exports = {
  options: {
    namespace: "jst",
    wrapped: true,
    processName: function(filename) {
      var _grunt = require('grunt');

      String.prototype.toCapitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
      }

      var pieces = filename.split("/")
        , pieces = pieces[pieces.length - 1].split(".")
        , pieces = pieces[0].split("-")
        , word = ''

      var i = 0

      _grunt.util._.each(pieces, function(piece) {
        if(i > 0) {
          piece = piece.toCapitalize();
        }

        word += piece
        i++
      })

      return word
    }
  },
  compile: {
    files: {
      'src/templates/templates.js': 'src/templates/*.handlebars'
    }
  }
};
