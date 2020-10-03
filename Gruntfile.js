module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      coveralls: {
        // Options relevant to all targets
        options: {
          // When true, grunt-coveralls will only print a warning rather than
          // an error, to prevent CI builds from failing unnecessarily (e.g. if
          // coveralls.io is down). Optional, defaults to false.
          force: false
        },
        your_target: {
          // LCOV coverage file (can be string, glob or array)
          src: 'test/results/results.info',
          options: {
            // Any options for just this target
          }
        },
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-coveralls');
  
    grunt.registerTask('default', ['jshint']);
  
  };