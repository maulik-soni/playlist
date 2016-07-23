app.controller("playlistcontroller",['$scope','$http',function ($scope,$http) {

	$scope.generes = [];
	$scope.tracklist= [];
	$scope.form = {};
	$scope.maxvalue = 5;	

    $scope.init = function(){
    	$http
			.get("http://127.0.0.1/playlist/api/public/gettracklist")
	      	.then(function(response) {
	      		for(var i = 0; i < response.data.length; i++){
	      			$scope.tracklist.push({
		    			songname : response.data[i].song_genere,
		    			genere : response.data[i].song_name,
		    			rating : response.data[i].song_ratings
    				});
	      		}	      
				$scope.generes = ['one','two','three','four'];
		    	$scope.form.rating = 1;
		    	$scope.activetab = 'track';    			    	
		    	$scope.viewby = 1;
			  	$scope.totalItems = $scope.tracklist.length;
			  	$scope.currentPage = 4;
			  	$scope.itemsPerPage = $scope.viewby;
			  	$scope.maxSize = 5;
	      	});
	};

	$scope.addsonginlist = function(form){
		$http
			.post("http://127.0.0.1/playlist/api/public/addtrack",JSON.stringify(form))
	      	.then(function(response) {
	      		$scope.tracklist.push(form);
				$scope.totalItems = $scope.tracklist.length;
				$scope.form = {};
				$('#editform').modal('hide');
	      	});
		
	};

	$scope.edittrack = function(track){
		delete track.$$hashKey;		
		$scope.edittrackdata = JSON.parse(JSON.stringify(track));
	};

	$scope.editsonginlist = function(d){
		console.log(d);
	};

	$scope.customtabs = function(tab) {
    	$scope.activetab = tab;
    };

    $scope.addgenere = function(genere){
    	$http
			.post("http://127.0.0.1/playlist/api/public/addgenere",{
				"generename" : genere
			})
	      	.then(function(response) {
	      		$scope.generes.push(genere);
		  		$scope.generename = '';
				$('#addgenere').modal('hide');
	      	});
  				
	}

}])