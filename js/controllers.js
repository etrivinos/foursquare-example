var app = angular.module('foursquare.controllers', []);

app.controller("FoursquareController", function ($scope, FoursquareService) {

  // Foursquare service
  $scope.foursquare = FoursquareService;

  /**
  * Set the current venue
  */
  $scope.setCurrentVenueData = function(venueData) {
    $scope.currentVenueData = venueData;
  }

  /**
  * Search venues base on query
  */
  $scope.searchVenues = function() {
  	$scope.foursquare.load($scope.query);
  };

  /**
  * Get the current position 
  */
  $scope.getCurrentPosition = function() {
  	if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      	$scope.$apply(function(){
	        $scope.foursquare.lat = position.coords.latitude;
	        $scope.foursquare.lon = position.coords.longitude;

	        $scope.foursquare.load();
				});
      });
	  }
	  else {
      $scope.error = 'Geolocation is not supported by this browser.';
	  }
  }

  /**
  * Init function
  */
  var init = function() {
	 $scope.getCurrentPosition(); 
  }

  init();
});