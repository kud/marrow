/*global module:false*/
module.exports = {
  options: {
    camelcase: true,
    es3: true,
    asi: true,
    laxcomma: true,
    bitwise: false,
    eqeqeq: false,
    eqnull: true,
    boss: true,
    browser: true,
    undef: true,
    unused: true,
    curly: false,
    strict: false,
    globals: {
      $: true,
      Backbone: true,
      console: true
    }
  },
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
