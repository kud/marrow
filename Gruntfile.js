/*global module:false*/
module.exports = function(grunt) {
  "use strict";

  // Import
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

   if (grunt.file.exists('config.json')) {
    var config = grunt.file.readJSON("config.json");
  }
  else {
    grunt.log.error('Wow, wow, wow! Please, have a `config.json` for fuck\'s sake!');
    process.exit(1);
  }

  // Config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: config,

    timestamp: new Date().getTime(),
    cachebuster: '.<%= timestamp %>',

    notify: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: '<%= pkg.name %>'
      },
      complete: {
        options: {
          message: 'Build done.'
        }
      }
    },

    // Clean dist folder
    clean: {
      all: ["dist/*"],
      handlebars: ['src/templates/templates.js']
    },

    // Copy assets
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: "src/assets/",
            src: ["**"],
            dest: "dist/"
          }
        ]
      }
    },

    // Manage assets versioning in html
    replace: {
      versionProd: {
        options: {
          variables: {
            'cachebuster': '<%= cachebuster %>'
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
      versionDev: {
        options: {
          variables: {
            'cachebuster': ''
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
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 4,
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: "dist/img",
            src: ["**/*.{png,jpg,jpeg,gif,svg}"],
            dest: "dist/img"
          }
        ]
      }
    },

    // Compile templates
    handlebars: {
      options: {
        namespace: "jst",
        wrapped: true,
        processName: function(filename) {
          var piece = filename.split("/");
          var anotherPiece = piece[piece.length - 1].split(".");

          return anotherPiece[0];
        }
      },
      compile: {
        files: {
          'src/templates/templates.js': 'src/templates/*.handlebars'
        }
      }
    },


    // Sass makes your style amazing
    sass: {
      options: {
        require: [],
        sourcemap: true
      },
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: '<%= config.styles %>'
      },
      dist: {
        options: {
          style: 'compressed',
          lineNumbers: false
        },
        files: '<%= config.styles %>'
      }
    },

    // Merge JavaScript
    concat: {
      scripts: {
        files: '<%= config.scripts %>'
      }
    },

    // Minify JavaScript
    uglify: {
      scripts: {
        files: '<%= config.scripts %>'
      }
    },

    // server
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist',
          hostname: ''
        }
      }
    },

    // $ grunt watch
    watch: {
      options: {
        interval: 5007, // try to reduce cpu
        spawn: false // only needed for windows
      },
      assets: {
        files: [
          'src/assets/**'
        ],
        tasks: [
          'assets', 'notify:complete'
        ]
      },
      styles: {
        files: [
          'src/styles/**/*.scss'
        ],
        tasks: [
          'style:dev', 'notify:complete'
        ]
      },
      scripts: {
        files: [
          'src/**/*.js'
        ],
        tasks: [
          'scripts:dev', 'notify:complete'
        ]
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: ['dist/**/*.*'],
        tasks: ['notify:complete']
      }
    }
  });

  // Tasks
  grunt.registerTask('default',             ['dev', 'connect:server', 'watch']);
  grunt.registerTask('dist',                ['clean:all', 'copy:assets', 'sass:dist', 'scripts:dist', 'imagemin:dist', 'replace:versionProd', 'notify:complete']);
  grunt.registerTask('dev',                 ['clean:all', 'copy:assets', 'sass:dev', 'scripts:dev', 'replace:versionDev', 'notify:complete']);
  grunt.registerTask('assets',              ['copy:assets', 'replace:versionDev']);
  grunt.registerTask('styles:dev',          ['assets', 'sass:dev']);

  // Dependances
  grunt.registerTask('scripts:dev',         ['handlebars:compile', 'concat:scripts', 'clean:handlebars']);
  grunt.registerTask('scripts:dist',        ['handlebars:compile', 'uglify:scripts', 'clean:handlebars']);

  // grunt.registerTask('testFiles', 'Task which tests if all embedded files are here.', function() {
  //   var isError = false;

  //   _.each(config.scripts, function(collection) {
  //     _.each(collection, function(item) {
  //       if(!/\*|\!/.test(item)) {
  //         if(!grunt.file.exists(item)) {
  //           grunt.log.error('Dead file: ' + item);
  //           isError = true;
  //         }
  //       }
  //     });
  //   });

  //   if(isError) {
  //     grunt.fail.warn('Dead files!')
  //   }
  // });

};