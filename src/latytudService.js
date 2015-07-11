angular.module('latytudPhotoApp').factory('latytudService', function($http) {
    return {
      fetchLeftMenu : function() {
        return $http.get('/json/leftMenu.json')
      }
    }
})
