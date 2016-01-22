var app = angular.module('foursquare.services', []);

app.service("FoursquareService", function ($q, $http, $filter, config) {
	var self = {
    'endpoint': 'explore',
    'isLoading': false,
    'venues': [],
    'lat': null,
    'lon': null,
    'load': function (query) {
      self.isLoading = true;
      var deferred = $q.defer();

      // Get the enpoint url
      var url = config.foursquare.endpoint[self.endpoint];

      // Set endpoint params
      var params = {
        'client_id': config.foursquare.client_id,
        'client_secret': config.foursquare.client_secret,
        'v': $filter('date')(new Date(), 'yyyyMMdd'),
        'll': [self.lat, self.lon].join(),
        'query': query,
        'venuePhotos': 1
      };

      // Get the endpoint venues
      $http.get(url, {params: params})
        .success(function (data) {
          self.isLoading = false;

          // The response is OK
          if(data.meta.code === 200) {
            var venues = [];

            // Get venues if the endpoint is the search endpoint
            if(self.endpoint === 'search') {
              angular.forEach(data.response.venues, function (venue) {
                venues.push(venue);
              });
            }
            // Get venues if the endpoint is the explore endpoint
            else if(self.endpoint === 'explore') {
              angular.forEach(data.response.groups[0].items, function(item) {
                venues.push(item);
              });
            }

            // Save the venues
            self.venues = venues;
          }
          deferred.resolve();
        })
        .error(function (data, status, headers, config) {
          self.isLoading = false;
          deferred.reject(data);
        });

      return deferred.promise;
    }
	};

	return self;
});