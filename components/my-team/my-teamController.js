'use strict';

cs142App.controller('MyTeamController', ['$scope',
    function ($scope) {
    	$scope.userInfo = {};
    	$scope.userInfo.photos = [
			"Melissa.jpg",
			"Allan.jpeg",
			"Annabel.jpg",
			"Debnil.png",
			"Divya.jpg",
			"Elizabeth.jpg",
		];

    }]);



cs142App.directive('huddle', ['$transform',function($transform) {
  return {
    restrict: 'E',
    scope: {
      model: "=ngModel"  
    },
    compile: function(clockElem) {
      var $hour, $hours = [];
      var photos = [
			"Melissa.jpg",
			"Kayland.jpeg",
			"Annabel.jpg",
			"Debnil.png",
			"Divya.jpg",
			"Elizabeth.jpg",
			"Allan.jpeg",
			"Avatar.png",

		];
      
      for (var h = 1; h <= 8; h++) {
        $hour = angular.element('<div class="teammate"><img ng-src="../images/'+ photos[h-1]+'" class="teammateImage"></div>');
        clockElem.append($hour);
        $transform.set($hour,
          'rotate(' + (45 * h - 90) + 'deg) translateX(275px) rotate(' + (-45 * h + 90) + 'deg)');
        $hours.push($hour);
      }
    }
  };
}]);

