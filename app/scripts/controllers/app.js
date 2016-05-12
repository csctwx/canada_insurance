'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
  .controller('AppCtrl', function ($location) {
    this.active = function(path) {
        return $location.path() == path ? 'current' : '';
    };
    this.isHome = function(path) {
        var currentPath = $location.path();
        return (currentPath == '/') ? true : false;
    };
  });
