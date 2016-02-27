module.exports = function(grunt) {
  'use strict';

  // Define grunt config option
  grunt.config.set('config', require('./Gruntconfig')());

  // Load project configuration
  require('grunt-config-dir')(grunt, {
    configDir: require('path').resolve('build/config')
  });

  // Measures the time each task takes
  require('time-grunt')(grunt);

  /*
    The following tasks are ran within concurrent
    - sass:dev
    - lodash:dev
    - modernizr:dev
    - copy:dev
  */
  grunt.registerTask(
    'serve',
    function(){
      grunt.task.run([
        'clean:dev',
        'bowercopy:dev',
        'sass_globbing:dev',
        'concurrent:dev',
        'postcss:dev',
        'jquery',
        'browserSync:dev',
        'watch'
      ]);
    }
  );

  grunt.registerTask(
    'dist',
    function() {
      grunt.task.run([
        'clean:dist',
        'bowercopy:dev',
        'sass_globbing:dev',
        'concurrent:dist',
        'postcss:dist',
        'jquery'
      ]);
    }
  );
  

  /**
   * Custom build jQuery based on configs in Gruntconfig.js
   */
  grunt.registerTask(
    'jquery',
    'Build a custom jQuery',
    function jqueryTask() {
      grunt.log.writeln('Starting the jQuery Build Process');

      var done = this.async(),
          child,
          mkdirp = require('mkdirp'),
          jquery = grunt.config.get('config').jquery,
          exec = require('child_process').exec,
          command = 'node node_modules/jquery-builder/bin/builder.js ' +
                    '-v ' + jquery.version + ' ';

          if (jquery.exclude.length > 0) {
            command += '--exclude ' + jquery.exclude;
          }

          command += ' > ' + jquery.dest + '/jquery.js';

      grunt.log.writeln('Execute the jQuery Build Process');

      mkdirp(jquery.dest, function(err) { 
        if (err) {
          throw err;
        }

        child = exec(
          command,
          function(error){
            if (error !== null) {
              grunt.log.error('exec error: ' + error);
            } else {
              grunt.log.writeln('jQuery Build Process was successful');
            }

            done();
          }
        );
      });
    }
  );

  grunt.registerTask(
    'custom-lodash',
    'Build a custom Lodash',
    function() {
      grunt.log.writeln('Start the lodash Build Process');

      var done = this.async(),
          command = 'lodash category=object,collection,array,function,lang -d -o ./source/js/lodash.js',
          exec = require('child_process').exec,
          child;

      grunt.log.writeln('Execute the Lodash Build Process');

      child = exec(
        command,
        function (error) {
          if (error !== null) {
            grunt.log.error('exec error: ' + error);
          } else {
            grunt.log.writeln('Lodash Build Process was successful');
          }

          done();
        }
      );

    }
  );
};
