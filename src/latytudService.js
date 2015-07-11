angular.module("latytudPhotoApp").factory("latytudService", ["$http", function($http) {
    return {
      fetchLeftMenu : function() {
        return $http.get('/json/leftMenu.json')
      }
    }
}])
