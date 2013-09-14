/*global module:false*/
module.exports = {
  minify: ['styles:dist', 'scripts:dist'],
  concat: ['styles:dev', 'scripts:dev'],
  'images-dist': ['imagemin:compile', 'svgmin:compile']
};
