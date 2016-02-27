
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  grunt.loadNpmTasks('grunt-browser-sync');

  return {
    dev: {
      bsFiles: {
        src: [
          '*.css',
          '**/*.php',
          'images/*.jpg',
          'images/*.png',
        ],
      },
      options: {
        watchTask: true,
        debugInfo: true,
        logConnections: true,
        notify: true,
        // proxy: '',
        // server: {
          // baseDir: './' + config.tmp,
          // routes: {
          //   '/bower_components': 'bower_components',
          //   '/js': 'source/js',
          //   '/images': 'source/images',
          //   '/css/fonts': 'source/css/fonts'
          // }
        // },
        background: true
      }
    }
  };
};
