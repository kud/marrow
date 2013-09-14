/*global module:false*/
module.exports = {
  options: {
    sourcemap: true
  },
  dist: {
    options: {
      style: 'compressed',
      lineNumbers: false
    },
    files: '<%= config.styles %>'
  },
  dev: {
    options: {
      lineNumbers: true
    },
    files: '<%= config.styles %>'
  }
};
