module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'src/**/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      coveralls: {
        options: {
          force: false
        },
        your_target: {
          // LCOV coverage file (can be string, glob or array)
          src: 'coverage/lcov.info',
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
  
    grunt.loadNpmTasks('grunt-coveralls', ['grunt-coveralls']);
    grunt.registerTask('default', ['jshint']);
  
  };