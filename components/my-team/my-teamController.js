'use strict';

cs142App.controller('MyTeamController', ['$scope',
    function ($scope) {

    }]);

cs142App.run(['$rootScope', function($rootScope){
  $rootScope.selectedHour = 12;
}]);

cs142App.directive('clock', ['$transform',function($transform) {
  return {
    restrict: 'E',
    scope: {
      model: "=ngModel"  
    },
    compile: function(clockElem) {
      var $hour, $hand, $hours = [];
      
      for (var h = 1; h <= 12; h++) {
        $hour = angular.element('<div class="clock-hour">' + h + '</div>');
        clockElem.append($hour);
        $transform.set($hour,
          'rotate(' + (30 * h - 90) + 'deg) translateX(100px) rotate(' + (-30 * h + 90) + 'deg)');
        $hours.push($hour);
      }
      $hand = angular.element('<div class="clock-hand"></div>');
      clockElem.append($hand);

      var centerHandToHour = function(hour) {
        $transform.set($hand, 
          'rotate(' + (30 * hour - 90) + 'deg) translateX(100px)');
      };

    }
  };
}]);

