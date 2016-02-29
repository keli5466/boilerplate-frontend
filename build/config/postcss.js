
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-postcss');

  return {
    options: {
      map: {
        inline: false, // save all sourcemaps as separate files...
        annotation: config.devCSS // ...to the specified directory
      },

      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
        require('cssnano')({zindex: false}) // minify the result
      ],
    },
    dev: {
      src: config.devCSS + '/app.css'
    },

    dist: {
      src: config.distCSS + '/app.css'
    }
  };
};
