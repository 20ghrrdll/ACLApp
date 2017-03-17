'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial', 'mobile-angular-ui.gestures']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/my-team/my-teamTemplate.html',
                controller: 'MyTeamController'
            }).
            when('/stories', {
                templateUrl: 'components/stories/storiesTemplate.html',
                controller: 'StoriesController'
            }).
            when('/my-timeline', {
                templateUrl: 'components/my-timeline/my-timelineTemplate.html',
                controller: 'MyTimelineController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            when('/photos/:userId/:photoId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope',
    function ($scope) {
        $scope.main = {};
        $scope.main.title = 'Users';
         /*
          * FetchModel - Fetch a model from the web server.
          *   url - string - The URL to issue the GET request.
          *   doneCallback - function - called with argument (model) when the
          *                  the GET request is done. The argument model is the
          *                  object containing the model. model is undefined in 
          *                  the error case.
          * $apply lives in the doneCallback
          */
         $scope.main.FetchModel = function(url, doneCallback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (){
              if (this.readyState !== 4) { // DONE
               return;
              }
              if (this.status !== 200) { // OK
               console.log("eek. Error: "+this.status);
               return;
              }
              var response = this.responseText;
              //console.log("The response is "+response);
              doneCallback(JSON.parse(this.responseText));

            };
            xhr.open("GET", url);
            xhr.send();
         };
        function updateVersion(versionInfo){
          $scope.$apply(function () {
            $scope.main.versionNo = versionInfo.__v;
          });
        }
        $scope.main.FetchModel('/test/info', updateVersion);
    }]);
