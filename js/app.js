/**
* App Module
*/
var app = angular.module('foursquare', [
  'foursquare.controllers',
  'foursquare.services'
]);

/**
* App Config
*/
app.constant('config', {
	/**
	* Set the foursquare client id and client secret keys, 
	* and api endpoints.
	* 
	* Client id:          config.foursquare.client_id
	* Client secret:      config.foursquare.client_secret
	* Search endpoint:    config.foursquare.endpoint.search
	* Explore endpoint:   config.foursquare.endpoint.explore
	*/
	'foursquare': {
		'client_id': 'A0VTF1M1KHXCHXZ1GJLOWBEMAJEU4IZGBTJOWB2C5FZKPQTU',
		'client_secret': 'IALQZWN0X2TAWAPEUBXP2MNHT0XSWJMKTJMWOQ3OB3N10DMU',
		'endpoint': {
			'search': 'https://api.foursquare.com/v2/venues/search',
			'explore': 'https://api.foursquare.com/v2/venues/explore'
		}
	}
});