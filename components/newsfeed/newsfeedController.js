'use strict';

cs142App.controller('NewsfeedController', ['$scope',
    function ($scope) {

    	$scope.posts = [
    			{
    		 name: "BigTOser", 
    		 sport:"football", 
    		 content: "Just did my first practice. Cool but strange being back"
    		},
    		{name: "LaxLuv32", 
    		 sport:"LAX", 
    		 content: "Ahhh, my arms hurt from crutches. I'd love some tips..."
    		},
    		{name: "Crew32", 
    		 sport:"Rowing", 
    		 content: "Watching vidoes from old races and feeling like I'm missing out... shoot."
    		},
    		{name: "soccerChiq", 
    		 sport:"Soccter - defense", 
    		 content: "Looking for more inspiration. Anyone got stories to refer me to?"
    		}
    	];
    }]);

cs142App.run(['$rootScope', function($rootScope){
  
}]);
