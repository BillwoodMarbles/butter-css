module.exports = function (grunt) {
  grunt.initConfig(
    {
      sass: {
        dist: {
          files: {
            'dist/css/butter.css': 'scss/butter.scss'
          }
        }
      },
      concat: {
        js: {
          options: {
            separator: ';'
          },
          files: {}
        }
      },
      uglify: {
        js: {
          files: {}
        }
      },
      cssmin: {
        add_banner: {
          options: {
            banner: '/* minified css */'
          },
          files: {
            'dist/css/butter.min.css': ['dist/css/butter.css']
          }
        }
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask(
    'default', [
      'sass',
      'concat',
      'uglify',
      'cssmin'
    ]
  );
};