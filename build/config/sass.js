
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config'),
      sourceSassFile = config.css + '/app.scss',

      // path to the dev version of app.css
      devCssFile = config.devCSS + '/app.css',

      // path to the dist version fo the app.css
      distCssFile = config.distCSS + '/app.css';

  // Load task
  grunt.loadNpmTasks('grunt-sass');

  // Config
  var sassConfig = {
    options: {
      sourceMap: true,
      outputStyle: 'expanded',
      includePaths: [
        './bower_components',
        './bower_components/compass-mixins/lib',
        './bower_components/support-for/sass'
      ],
      force: true
    },

    dev: {
      files: {}
    },

    dist: {
      outputStyle: 'compressed',
      files: {}
    }
  };

  sassConfig.dev.files[devCssFile] = sourceSassFile;
  sassConfig.dist.files[distCssFile] = sourceSassFile;

  return sassConfig;
};
