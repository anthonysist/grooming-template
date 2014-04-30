barkshack.factory('instagrams', ['$http', function($http){

	return {
		fetchPopular: function(callback){
            
            var endPoint = "https://api.instagram.com/v1/tags/puppy/media/recent?client_id=ce35069ff94a4cfc8de4d9f39ce64d6a&callback=JSON_CALLBACK";
            
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
		}
	}

}]);






