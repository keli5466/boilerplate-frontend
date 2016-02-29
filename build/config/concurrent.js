
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
      'requirejs:dev',
      'assemble:dev'
    ],

    dist: [
      'sass:dist',
      'modernizr:dist',
      'copy:dist',
      'requirejs:dist',
      'assemble:dist'
    ]
  };
};
