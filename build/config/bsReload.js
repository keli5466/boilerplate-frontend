
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  grunt.loadNpmTasks('grunt-browser-sync');

  // Config
  return {
    css: {
      reload: 'css/**/*.css'
    },

    js: {
      reload: true
    },

    html: {
      reload: true
    }
  };
};
