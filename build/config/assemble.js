
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-assemble');

  // Config
  return {
    options: {
      helpers: [
        'handlebars-helpers',
        'swag',
        'handlebars-form-helpers',
        config.tmpl + '/_helpers/*'
      ],
      layout: 'default.hbs',
      layoutdir: config.tmpl + '/_layouts',
      partials: [config.tmpl + '/_partials/**/*.hbs'],
      data: config.tmpl + '/_data/**/*.json'
    },

    dev: {
      files: [
        {
          cwd: config.tmpl + '/_pages/',
          dest: config.dev,
          expand: true,
          src: '**/*.hbs'
        }
      ]
    },

    dist: {
      files: [
        {
          cwd: config.tmpl + '/_pages/',
          dest: config.dist,
          expand: true,
          src: '**/*.hbs'
        }
      ]
    }
  };
};
