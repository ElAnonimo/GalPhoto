angular.module('galPhoto')

.controller('GalleryCtrl', ['$scope', 'instagram', 'Lightbox', function($scope, instagram, Lightbox) {
	console.log($scope);
	
	$scope.images = [];
	var imgArray = [];
	
	instagram.fetchPopular(function(data) {
		console.log(data);
		
		$scope.images = data;
		angular.forEach(data, function(value, key) {
			imgArray.push(value.images.standart_resolution);
		});
		
		$scope.openLightboxModal = function(index) {
			// Lightbox.openModal($scope.images, index);
			Lightbox.openModal(imgArray, index);
		}
	})
}])