
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-eslint');

  // Config
  return {
    options: {
      configFile: 'eslint.json'
    },
    dev: [
      config.js + '/**/*.js',
      '!' + config.js + '/libs/**/*.js',
      '!' + config.js + '/backbone.js'
    ]
  };
};
