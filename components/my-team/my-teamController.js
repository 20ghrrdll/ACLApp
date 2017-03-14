'use strict';

cs142App.controller('MyTeamController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Users';
        $scope.users = {
        	list: window.cs142models.userListModel(),
        };

        function updateUserList(users){
	        $scope.$apply(function () {
	            $scope.users = {
		        	list: users,
		        };
	            $scope.main.title = 'Users';
	        });
	    }
    	$scope.main.FetchModel('/user/list', updateUserList);

        //console.log('window.cs142models.userListModel()', window.cs142models.userListModel());
    }]);

