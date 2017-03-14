'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    function updatePhotoList(photos){
      $scope.$apply(function () {
        $scope.photos = photos;
      });
    }
    $scope.main.FetchModel('/photosOfUser/'+userId, updatePhotoList);


    function updateUserHeader(user){
        $scope.$apply(function () {
            $scope.user = user;
            $scope.main.title = $scope.user.first_name+" "+$scope.user.last_name+"'s Photos";
        });
    }
    $scope.main.FetchModel('http://localhost:3000/user/'+userId, updateUserHeader);

  }]);
