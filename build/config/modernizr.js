
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  grunt.loadNpmTasks('grunt-modernizr');

  /*
    Go to https://modernizr.com/download, select the features you want to
    detect, click build, copy `customTests`, `tests`, `extensibility` from the
    Grunt Config, and replace // REPLACEME // (including the // and //)
  */

  return {
    dev: {
      // https://github.com/doctyper/customizr#cache-boolean-optional
      // cache: true,

      // https://github.com/doctyper/customizr#devfile-string-optional
      devFile: 'remote',

      // https://github.com/doctyper/customizr#dest-string-optional
      dest: 'dist/wp-content/themes/cpb/modernizr.js',

      // https://github.com/doctyper/customizr#uglify-boolean-optional
      uglify: false,

      // https://github.com/doctyper/customizr#crawl-boolean-optional
      crawl: false,

      // https://github.com/doctyper/customizr#usebuffers-boolean-optional
      useBuffers: false,

      "tests": [
        "pointerevents",
        "touchevents",
        "cssanimations",
        "picture"
      ],
      "options": [
        "setClasses"
      ],
    },

    dist: {
      // https://github.com/doctyper/customizr#cache-boolean-optional
      cache: true,

      // https://github.com/doctyper/customizr#devfile-string-optional
      devFile: 'remote',

      // https://github.com/doctyper/customizr#dest-string-optional
      dest: 'dist/wp-content/themes/cpb/modernizr.js',

      // https://github.com/doctyper/customizr#uglify-boolean-optional
      uglify: true,

      // https://github.com/doctyper/customizr#crawl-boolean-optional
      crawl: false,

      // https://github.com/doctyper/customizr#usebuffers-boolean-optional
      useBuffers: false,

      "tests": [
        "pointerevents",
        "touchevents",
        "cssanimations",
        "picture"
      ],
      "options": [
        "setClasses"
      ]
    }
  }
};
