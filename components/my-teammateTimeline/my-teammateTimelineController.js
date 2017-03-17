'use strict';

cs142App.controller('MyTimelineController', ['$scope',
    function ($scope) {
    	$scope.posts = [
    		{content: "Headed back to class today. College campuses are so hard to navigate on crutches!"},
    		{content: "I’m a crutches expert. Come test me. It’s all about the towels on your arm rests.  #tip #crutchpert"},
    		//{content: "I will be honest – Day 4 was one of the worst for pain. I think if you have a hold on your pain meds, then it might not be such a problem. BUT. i was all over the place, trying out 2 every 4 hours, then 1 every 2 hours.. i just overall was not feeling very good. "},
    		{content: "Finally sitting up!"}
    	];

}]);

