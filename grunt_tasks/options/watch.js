/*global module:false*/
module.exports = {
  options: {
    //spawn: false, // only needed for windows
    interval: 5007 // try to reduce cpu
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
    tasks: ['copy:assets', 'replace:dev', 'styles:dev']
  },
  scripts: {
    files: [
      'src/**/*.{js,handlebars}',
      '!src/templates/templates.js'
    ],
    tasks: ['scripts:dev']
  },
  livereload: {
    options: {
      livereload: true,
    },
    files: ['dist/**/*'],
    tasks: ['notify:complete']
  }
};
