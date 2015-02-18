'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:calendar
 * @description
 * # calendar
 */
angular.module('calendarApp')
  .directive('calendar', function () {
    return {
      template: 'calendar.html',
      restrict: 'EA',
            
      link: function postLink(scope, element, attrs) {
        element.text('this is the calendar directive');
      }
    };
  });
