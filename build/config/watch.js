
/**
 * Grunt Watch
 * @param  {Grunt} grunt
 * @return {Object} config for grunt watch
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Config
  return {
    options: {
      spawn: false
    },

    rebuild: {
      files: [
        'Gruntfile.js',
        'Gruntconfig.js',
        'build/config/**/*.js'
      ],
      tasks: []
    },

    js: {
      files: [
        'Gruntfile.js',
        'Gruntconfig.js',
        'build/config/**/*.js',
        config.js + '/**/*.js',
        '!' + config.js + '/libs/*.*'
      ],
      tasks: [
        'eslint',
        'requirejs:dev',
        'jquery',
        'bsReload:js'
      ]
    },

    css: {
     files: [
       config.css + '/**/*'
     ],
      tasks: [
        'sass_globbing:dev',
        'sass:dev',
        'postcss:dev',
        'bsReload:css'
      ]
    },

    theme: {
      files: [
        config.root + '/theme/**/*'
      ],
      tasks: [
        'copy:theme',
        'bsReload:html'
      ]
    }
  };
};
