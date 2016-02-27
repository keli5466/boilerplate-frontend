
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Config
  return {
    dev: config.dev,
    dist: config.dist
    // dist: {
    //   files: [{
    //     dot: true,
    //     src: [
    //       '.tmp',
    //       config.dist + '/*',
    //       '!' + config.dist + '/.git*'
    //     ]
    //   }]
    // }
  };
};
