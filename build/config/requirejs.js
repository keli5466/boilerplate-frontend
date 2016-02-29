
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config'),
      settings = config.requirejs,
      exclude,
      removeExcludes,
      isEmpty;

  // Load task
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  exclude = ['libs/jquery',
    'jquery'
  ];

  // takes an array of modules you don't want excluded and removes
  // from the exclude list.  This is used in the excludeShallow param
  removeExcludes = function removeExcludes(excludesToRemove) {
    var localExcludes = exclude.slice(0),
        i = excludesToRemove.length;

    while (i--) {
      var index = localExcludes.indexOf(excludesToRemove[i]);
      if (index > -1) {
        localExcludes.splice(index, 1);
      }
    }

    return localExcludes;
  };

  //http://stackoverflow.com/questions/4994201/is-object-empty
  isEmpty = function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj === null) {
      return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length && obj.length > 0) {
      return false;
    }

    if (obj.length === 0) {
      return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and toValue enumeration bugs in IE < 9
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        return false;
      }
    }

    return true;
  };

  return {

    dev: {
      options: {
        baseUrl: config.js,
        mainConfigFile: settings.main, // TODO change to match the
                                                // config for this project

        optimize: 'none',
        dir: config.devJS,
        preserveLicenseComments: false,
        removeCombined: false,
        useStrict: true,
        wrapShim: true,
        paths: {
          settings: 'empty:',
          jquery: 'empty:'
        },
        modules: [
          {
            name: 'main',
            excludeShallow: removeExcludes([])
          }
        ],
        done: function(done, output) {
          var duplicates = require('rjs-build-analysis').duplicates(output),
              msg = 'r.js built duplicate modules, ' +
                    'please check the excludes option.';

          grunt.log.subhead('requirejs build:');
          grunt.log.write(output);

          if (!isEmpty(duplicates)) {
            grunt.log.subhead('Duplicates found in requirejs build:');
            grunt.log.warn(duplicates);
            return done(new Error(msg));
          }

          done();
        }
      }
    },

    dist: {
      options: {
        baseUrl: config.js,
        mainConfigFile: settings.main, // TODO change to match the
                                                // config for this project

        optimize: settings.optimize,
        dir: config.distJS,
        preserveLicenseComments: false,
        removeCombined: settings.removeCombined,
        useStrict: true,
        wrapShim: true,
        paths: {
          settings: 'empty:',
          jquery: 'empty:'
        },
        modules: [
          {
            name: 'main',
            excludeShallow: removeExcludes([])
          }
        ],
        done: function(done, output) {
          var duplicates = require('rjs-build-analysis').duplicates(output),
              msg = 'r.js built duplicate modules, ' +
                    'please check the excludes option.';

          grunt.log.subhead('requirejs build:');
          grunt.log.write(output);

          if (!isEmpty(duplicates)) {
            grunt.log.subhead('Duplicates found in requirejs build:');
            grunt.log.warn(duplicates);
            return done(new Error(msg));
          }

          done();
        }
      }
    }
  };
};
