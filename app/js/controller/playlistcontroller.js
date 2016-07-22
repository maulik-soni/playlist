app.controller("playlistcontroller",['$scope','$http',function ($scope,$http) {

	$scope.items = [];
	$scope.tracklist= [];
	$scope.form = {};
	$scope.maxvalue = 5;	

    $scope.init = function(){

    	$http
			.get("http://127.0.0.1/playlist/api/public/gettracklist")
	      	.then(function(response) {
	      		for(var i = 0; i < response.data.length-1; i++){
	      			$scope.tracklist.push({
		    			songname : JSON.parse(response.data[0]).songname,
		    			genere : JSON.parse(response.data[0]).genere,
		    			rating : String(JSON.parse(response.data[0]).rating)
    				});
	      		}	      
				$scope.items = ['one','two','three','four'];
		    	// $scope.maxvalue = $scope.tracklist.length;
		    	$scope.form.rating = 1;
		    	$scope.activetab = 'track';    			    	
		    	$scope.viewby = 1;
			  	$scope.totalItems = $scope.tracklist.length;
			  	$scope.currentPage = 4;
			  	$scope.itemsPerPage = $scope.viewby;
			  	$scope.maxSize = 5;
	      	});

		

	}

	$scope.addsonginlist = function(form){
		$http
			.post("http://127.0.0.1/playlist/api/public/addtrack",form)
	      	.then(function(response) {
	      		$scope.tracklist.push(form);
				$scope.totalItems = $scope.tracklist.length;
				$scope.form = {};
				$('#editform').modal('hide');
	      	});
		
	}

	$scope.edittrack = function(track){
		delete track.$$hashKey;		
		$scope.edittrackdata = JSON.parse(JSON.stringify(track));
	}

	$scope.editsonginlist = function(d){
		console.log(d);
	}

	$scope.customtabs = function(tab) {
    	$scope.activetab = tab;
    };

}])