'use strict';

cs142App.controller('StoriesController', ['$scope',
    function ($scope) {

    	$scope.posts = [
    			{
    		 name: "BigTOser", 
    		 sport:"football", 
    		 inspiration: "My family and teammates", 
    		 bio: "Was a Lineman, now I have a penchant for in-n-out and long walks on the beach"
    		},
    		{name: "LaxLuv32", 
    		 sport:"LAX", 
    		 inspiration: "I just want to win a championship", 
    		 bio: "I was team captain before my injury, was a big transition. Doing well now!"
    		},
    		{name: "Crew32", 
    		 sport:"Rowing", 
    		 inspiration: "My dad", 
    		 bio: "I struggled with discouragement during my recovery, but now I want to help others with similar struggles"
    		},
    		{name: "soccerChiq", 
    		 sport:"Soccter - defense", 
    		 inspiration: "My coach believed in me during my recovery, even at the hardest parts", 
    		 bio: "Former hyper-active college athlete, now a lawyer and yoga teacher"
    		}
    	];
    	// $scope.posts = [
    	// 	{
    	// 	 name: "BigTOser", 
    	// 	 sport:"football", 
    	// 	 inspiration: "My family and teammates", 
    	// 	 bio: "Lineman with a penchant for in-n-out and long walks on the beach"
    	// 	}
    	// 	// ,{name: "BigTOser2", 
    	// 	//  sport:"football2", 
    	// 	//  inspiration: "My family and teammates2", 
    	// 	//  bio: "2:Lineman with a penchant for in-n-out and long walks on the beach"
    	// 	// }
    		
    	// ];
    }]);

cs142App.run(['$rootScope', function($rootScope){
  
}]);
