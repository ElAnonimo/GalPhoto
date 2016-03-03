angular.module('galPhoto')

.factory('Instagram', function($resource) {
	return {
		fetchPopular: function(callback) {
			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
				client_id: '11081c91abbe4aa9af4d72a828bb8f38'
			}, {
				fetch: {method: 'JSONP'}
			});
			
			api.fetch(function(response) {
				callback(response.data);
			})
		}
	}
})

/* Client ID 	11081c91abbe4aa9af4d72a828bb8f38
Client Secret 	a83804b61b9244a28e8890b8ad210967
Website URL 	http://myob.com
Redirect URI 	http://myob.com
https://www.instagram.com/developer/clients/manage/?registered=GalPhoto
 */