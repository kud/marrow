/*global module:false*/
module.exports = function(grunt) {
  "use strict";

  // Import
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  // Config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

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
      compiledImg: ['dist/img/pm-icon', 'dist/img/svg'],
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

    // Optimise svg
    svgmin: {
      dist: {
        files: 'dist/img/svg/*.svg'
      },
      source: {
        files: 'src/assets/img/svg/*.svg'
      },
      font: {
        files: 'dist/font/*.svg'
      }
    },

    // Compile templates
    handlebars: {
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
    },

    // Compass rocks
    compass: {
      dev: {
        options: {
          sassDir: 'src/styles',
          cssDir: 'dist/css',
          outputStyle: 'expanded',
          noLineComments: false,
          force: false,
          imagesDir: 'dist/img',
          fontsDir: 'font',
          relativeAssets: true
        }
      },
      dist: {
        options: {
          sassDir: 'src/styles',
          cssDir: 'dist/css',
          outputStyle: 'compressed',
          noLineComments: true,
          force: true,
          imagesDir: 'dist/img',
          fontsDir: 'font',
          relativeAssets: true
        }
      }
    },

    // $ grunt watch
    watch: {
      assets: {
        files: [
          'src/assets/**'
        ],
        tasks: [
          'assets', 'notify:complete'
        ]
      },
      compass: {
        files: [
          'src/styles/**/*.scss'
        ],
        tasks: [
          'style:dev', 'notify:complete'
        ]
      },
      requirejs: {
        files: [
          'src/*.js',
          'src/collections/*.js',
          'src/models/*.js',
          'src/routers/*.js',
          'src/templates/*.handlebars',
          'src/views/**/*.js',
          'src/lib/**/*.js'
        ],
        tasks: [
          'app:dev', 'notify:complete'
        ]
      }
    }
  });

  // Tasks
  grunt.registerTask('default',           ['dev', 'watch']);
  grunt.registerTask('dist',              ['clean:all', 'copy:assets', 'fontcustom:dist', 'compass:dist', 'clean:compiledImg', 'r.js:dist', 'imagemin:dist', 'replace:versionProd', 'notify:complete']);
  grunt.registerTask('dev',               ['clean:all', 'copy:assets', 'fontcustom:dist', 'compass:dev', 'clean:compiledImg', 'r.js:dev', 'replace:versionDev', 'notify:complete']);
  grunt.registerTask('assets',            ['copy:assets', 'replace:versionDev']);
  grunt.registerTask('app:dev',           ['r.js:dev']);
  grunt.registerTask('style:dev',         ['assets', 'compass:dev']);

  // Dependances
  grunt.registerTask('r.js:dev',          ['handlebars:compile', 'requirejs:dev', 'clean:handlebars']);
  grunt.registerTask('r.js:dist',         ['handlebars:compile', 'requirejs:dist', 'clean:handlebars']);

  // Rename
  grunt.registerTask('fontcustom:dist',   ['shell:fontcustom', 'svgmin:font']);
  grunt.registerTask('server',            ['shell:server']);
  grunt.registerTask('new',               ['shell:newFiles']);

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