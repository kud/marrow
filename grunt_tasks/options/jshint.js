/*global module:false*/
module.exports = {
  dist: {
    options: {
      force: false
    },
    files: {
      src: ['src/**/*.js', '!src/**/*.min.js', "!src/templates/templates.js"]
    }
  },
  dev: {
    options: {
      force: true
    },
    files: {
      src: ['src/**/*.js', '!src/**/*.min.js', "!src/templates/templates.js"]
    }
  }
};
