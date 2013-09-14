/*global module:false*/
module.exports = {
  options: {
    namespace: "jst",
    wrapped: true,
    processName: function(filename) {
      var pieces = filename.split("/");
      var anotherPieces = pieces[pieces.length - 1].split(".");

      return anotherPieces[0];
    }
  },
  compile: {
    files: {
      'src/templates/templates.js': 'src/templates/*.handlebars'
    }
  }
};
