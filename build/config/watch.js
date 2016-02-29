
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
        'browserSync-inject-js'
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
        'browserSync-inject-css'
      ]
    },

    html: {
      files: [
        config.tmpl + '/**/*'
      ],
      tasks: [
        'assemble:dev',
        'browserSync-inject-html'
      ]
    }
  };
};
