'use strict';

cs142App.controller('MyTimelineController', ['$scope',
    function ($scope) {
    	$scope.posts = [
    		{content: "hello", date: Date.now},
    		{content: "hi", date: Date.now},
    		{content: "toast", date: Date.now}
    	];

}]);

