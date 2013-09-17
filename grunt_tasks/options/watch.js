/*global module:false*/
module.exports = {
  options: {
    //spawn: false, // only needed for windows
    //interval: 5007 // reduce cpu when watching but also make lags
  },
  assets: {
    files: [
      'src/assets/**'
    ],
    tasks: ['copy:assets', 'replace:dev']
  },
  styles: {
    files: [
      'src/styles/**/*.scss'
    ],
    tasks: ['styles:dev']
  },
  scripts: {
    files: [
      'src/**/*.{js,handlebars}',
      '!src/templates/templates.js'
    ],
    tasks: ['newer:jshint:dev', 'scripts:dev']
  },
  livereload: {
    options: {
      livereload: true,
    },
    files: ['dist/**/*'],
    tasks: ['notify:complete']
  }
};
