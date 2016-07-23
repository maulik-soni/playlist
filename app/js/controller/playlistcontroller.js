app.controller("playlistcontroller",['$scope','$http',function ($scope,$http) {
	
	$scope.tracklist= [];
	$scope.form = {};
	$scope.maxvalue = 5;	

    $scope.init = function(){
    	$http
			.get("http://127.0.0.1/playlist/api/public/gettracklist")
	      	.then(function(response) {
	      		for(var i = 0; i < response.data.length; i++){	
	      			$scope.tracklist.push({
	      				index : i,
	      				songid : response.data[i].id,
		    			songname : response.data[i].song_name,
		    			genere : response.data[i].song_genere,
		    			rating : response.data[i].song_ratings
    				});
	      		}	      		
		    	$scope.form.rating = 1;
		    	$scope.activetab = 'track';    			    	
		    	$scope.viewby = 7;
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

	$scope.getgeneres = function(){
		$http
			.get("http://127.0.0.1/playlist/api/public/getgeneres")
	      	.then(function(response) {
	      		$scope.generes = [];	      		
	      		for(var i = 0; i < response.data.length; i++){
	      			$scope.generes.push(response.data[i].song_genres);
	      		}	      		    	
	      	});		
	}

	$scope.edittrack = function(track){
		delete track.$$hashKey;	
		$scope.edittrackdata = JSON.parse(JSON.stringify(track));
	};

	$scope.editsonginlist = function(editedtrack){		
		$http
			.post("http://127.0.0.1/playlist/api/public/editedtrack",JSON.stringify(editedtrack))
	      	.then(function(response) {	      		
	      		$scope.tracklist[editedtrack.index].songname = editedtrack.songname;
	      		$scope.tracklist[editedtrack.index].songid = editedtrack.songid;
	      		$scope.tracklist[editedtrack.index].genere = editedtrack.genere;
	      	});	
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



	$scope.delgenere = function(delgenere){
		$http
			.post("http://127.0.0.1/playlist/api/public/delgenere",{
				"generename" : delgenere
			})
	      	.then(function(response) {
	      		$scope.generes.splice($scope.generes.indexOf(delgenere),1);
	      	});		
	}

}])