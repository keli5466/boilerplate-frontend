module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-copy');

  return {
    dev: {
      files: [
        {
          expand: true,
          cwd: config.root,
          src: [
            'robots.txt',
            'favicon.ico',
            'browserconfig.xml',
            'crossdomain.xml'
          ],
          dest: config.tmp
        }
      ]
    },

    dist: {
      files: [
        {
          expand: true,
          cwd: config.root,
          src: [
            'robots.txt',
            'favicon.ico',
            'css/fonts/**/*',
            '/js/lodash.js',
            '/js/jquery.js',
            'browserconfig.xml'
          ],
          dest: config.dist
        }
      ]
    }
  };
};
