module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/*'],
        tasks: ['copy'],
        options: {
          spawn: false,
        },
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            '*.html',
            'js/holder.min.js',
            'js/ie10-viewport-bug-workaround.js',
            'css/myrkit.css',
            'css/ie10-viewport-bug-workaround.css'
          ],
          dest: 'dist/'
        }, ]
      },
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/dist/',
          src: [
            'css/bootstrap.css',
            'css/bootstrap.min.css',
            'js/bootstrap.js',
            'js/bootstrap.min.js',
            'fonts/*'
          ],
          dest: 'dist/'
        }, ]
      },
      jquery: {
        files: [{
          expand: true,
          cwd: 'bower_components/jquery/dist/',
          src: [
            'jquery.js',
            'jquery.min.js'
          ],
          dest: 'dist/js'
        }, ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);

};
