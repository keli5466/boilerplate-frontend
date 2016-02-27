
module.exports = function(grunt) {
  'use strict';

  // Load task
  grunt.loadNpmTasks('grunt-concurrent');

  // Config
  return {
    dev: [
      'sass:dev',
      'modernizr:dev',
      'copy:dev',
      'copy:theme',
      'requirejs:dev'
    ],

    dist: [
      'sass:dist',
      'modernizr:dist',
      'copy:dist',
      'copy:theme',
      'copy:scrapper',
      'requirejs:dist'
    ]
  };
};
