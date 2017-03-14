'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */

    var userId = $routeParams.userId;
    function updateUserDetail(user){
        $scope.$apply(function () {
            $scope.user = user;
            $scope.main.title = $scope.user.first_name+" "+$scope.user.last_name;
        });
    }
    $scope.user.special = false;
    $scope.main.FetchModel('http://localhost:3000/user/'+userId, updateUserDetail);
  }]);
