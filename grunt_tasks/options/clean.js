/*global module:false*/
module.exports = {
  all: ["dist/*"],
  "compiled-images": ['dist/images/pm-icon', 'dist/images/svg'],
  handlebars: ['src/templates/templates.js'],
  "no-cachebuster": ['dist/styles/*.{css,css.map}', '!dist/styles/*<%= cachebuster %>.{css,css.map}', 'dist/scripts/*.js', '!dist/scripts/*<%= cachebuster %>.js']
};