'use strict';

/**
 * apps/master/app
 */

define([
  'settings'
], function defineMasterApp() {

  var App = {};

  /**
   * start()
   *
   * Gets the application running
   */
  App.start = function appStart() {
    $('main').append('<p>App Started</p>');
    console.log('App Started');
  };

  return App;

});
