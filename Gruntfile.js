/*global module:false*/
module.exports = function(grunt) {

  /**
   * Check if config.json exists
   */
  if (!grunt.file.exists('config.json') || !grunt.file.exists('package.json')) {
    grunt.log.error("Wow, wow, wow! Some json files are missing!")
    process.exit(1)
  }

  /**
   * Load configuration
   * @param  {string} path folder
   * @return {object}
   */
  function loadConfig(path) {
    var glob = require('glob')
      , object = {}
      , key

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'')
      object[key] = require(path + option)
    })

    return object
  }

  /**
   * Import modules
   */
  require('load-grunt-tasks')(grunt)

  /**
   * Define base configuration
   */
  var gruntConfig = {
    pkg: grunt.file.readJSON("package.json"),
    config: grunt.file.readJSON("config.json"),
    timestamp: new Date().getTime(),
    cachebuster: '.<%= timestamp %>'
  }

  /**
   * Merge configurations
   */
  grunt.util._.extend(gruntConfig, loadConfig('./grunt_tasks/options/'))

  /**
   * Init grunt
   */
  grunt.initConfig(gruntConfig)

  /**
   * Tasks
   */
  // Default
  grunt.registerTask('default',           ['dev', 'connect:server', 'open:localhost', 'watch'])

  // Public
  grunt.registerTask('dist',              ['main:dist', 'replace:dist', 'copy:cachebuster', 'notify:complete'])
  grunt.registerTask('dev',               ['main:dev', 'replace:dev', 'notify:complete'])

  // Private
  grunt.registerTask('start',             ['config:check', 'clean:all', 'copy:assets', 'glyphicons:compile'])

  grunt.registerTask('main:dist',         ['newer:jshint:dist', 'start', 'concurrent:minify', 'clean:compiled-images', 'concurrent:images-dist'])
  grunt.registerTask('main:dev',          ['newer:jshint:dev', 'start', 'concurrent:concat', 'clean:compiled-images'])

  grunt.registerTask('styles:dist',       ['sass:dist'])
  grunt.registerTask('styles:dev',        ['sass:dev'])

  grunt.registerTask('scripts:dist',      ['handlebars:compile', 'uglify:compile', 'clean:handlebars'])
  grunt.registerTask('scripts:dev',       ['handlebars:compile', 'concat:compile', 'clean:handlebars'])

  grunt.registerTask('glyphicons:compile',['shell:fontcustom'])

  grunt.registerTask('copy:cachebuster',  ['copy:cachebuster-css', 'copy:cachebuster-css-map', 'copy:cachebuster-js', 'clean:no-cachebuster'])

  // Custom tasks
  grunt.registerTask("config:check", 'Test if all embedded files are here.', function() {
    var isError = false

    grunt.util._.each(grunt.config.data.config.scripts, function(collection) {
      grunt.util._.each(collection, function(item) {
        if(!/\*|\!/.test(item)) {
          if(!('src/templates/templates.js' === item) && !grunt.file.exists(item)) {
            grunt.log.error('Dead file: ' + item)
            isError = true
          }
        }
      })
    })

    if(isError) {
      grunt.fail.warn('Please, check your config.json, some files are dead.')
    }
  })
}