'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MainCtrl', function ($scope, $routeParams) {

  	var sDate = $routeParams.date;
  	var oDate = {};

  	if(angular.isUndefined(sDate) == false){
  		var aDate = sDate.split('-');
  		aDate.reverse();
  		sDate = aDate.join('-');
  		oDate = new Date(sDate);
  	}else{
  		oDate = new Date();
  	}


  	$scope.iDay 	= oDate.getDate();  	
  	$scope.iDaysPerMonth =  getMonthDays(oDate);

  	function getMonthDays(oDate){
		var iMonth 	= oDate.getMonth();
  		var iYear 	= oDate.getFullYear();
  		return new Date(iYear, iMonth, 0).getDate();
  	}


  	$scope.dayRange = function(min, max, step){
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) input.push(i);
	    return input;
	};




  });
