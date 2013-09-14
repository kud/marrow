/*global module:false*/
module.exports = {
  dist: {
    options: {
      variables: {
        'cachebuster': '<%= cachebuster %>',
        'livereload': ''
      },
      prefix: '@@'
    },
    files: [
      {
        expand: true,
        cwd: "dist/",
        src: ["index.html"],
        dest: "dist/"
      }
    ]
  },
  dev: {
    options: {
      variables: {
        'cachebuster': '',
        'livereload': '<script src="http://localhost:35729/livereload.js" async defer></script>'
      },
      prefix: '@@'
    },
    files: [
      {
        expand: true,
        cwd: "dist/",
        src: ["index.html"],
        dest: "dist/"
      }
    ]
  }
};
