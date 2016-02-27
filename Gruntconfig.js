module.exports = function() {
  'use strict';

  var config = { };

  config.root  = 'source';
  config.js    = config.root + '/js';
  config.jsmin = config.js   + '/min';
  config.tmpl  = config.root + '/templates'

  config.css    = config.root + '/css';

  config.images = config.root + '/images';

  config.dev = 'dev';
  config.devCSS = config.dev + '/css';
  config.devJS = config.dev + '/js';

  config.dist = 'dist';
  config.distCSS = config.dist + '/css';
  config.distJS = config.dist + '/js';
  config.distImages = config.dist + '/images';

  config.requirejs = {
    //*
    optimize: 'uglify2',
    /*/
    optimize: 'none',
    //*/
    main: config.js + '/main.js',
    removeCombined: false // set to false if you want the combinded originals
  };

  config.jquery = {
    version: '2.1.1',
    exclude: '',
    dest: config.js + '/jquery.js'
  };

  config.sassGlob = {};

  config.sassGlob[
    config.css + '/_functionsMap.scss'
  ] = config.css + '/functions/**/*.scss';

  config.sassGlob[
    config.css + '/_mixinsMap.scss'
  ] = config.css + '/mixins/**/*.scss';

  config.sassGlob[
    config.css + '/_fontsMap.scss'
  ] = config.css + '/fonts/**/*.scss';

  config.sassGlob[
    config.css + '/_animationsMap.scss'
  ] = config.css + '/animations/**/*.scss';

  config.sassGlob[
    config.css + '/_defaultsMap.scss'
  ] = config.css + '/defaults/**/*.scss';

  config.sassGlob[
    config.css + '/_modulesMap.scss'
  ] = config.css + '/modules/**/*.scss';

  config.sassGlob[
    config.css + '/_utilitiesMap.scss'
  ] = config.css + '/utilities/**/*.scss';

  return config;
};
