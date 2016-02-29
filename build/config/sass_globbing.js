
/**
 * Sass Globbing
 * @param  {Grunt} grunt
 * @see Gruntconfig.sassGlob
 * @return {Object} config for sass_globbing
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config'),
      sassGlob = config.sassGlob;

  // Load task
  grunt.loadNpmTasks('grunt-sass-globbing');

  return {
    options: {
      useSingleQuotes: false
    },

    dev: {
      files: sassGlob
    }
  };
};
