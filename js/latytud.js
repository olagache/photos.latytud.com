angular.module('latytudPhotoApp', []);

angular.module("latytudPhotoApp").controller("LeftMenuController", ["$scope", "latytudService", function($scope, latytudService) {
  $scope.leftMenu;
  $scope.activeMenu;

  loadLeftMenu();

  function loadLeftMenu() {
    latytudService.fetchLeftMenu()
      .success(function(data) {
        $scope.leftMenu = data.leftMenu;
        $scope.activeMenu = data.activeMenu;
      })
      .error(function(data, status, headers, config) {
        console.log("ERROR IN loadLeftMenu");
    });
  }
}])

angular.module("latytudPhotoApp").factory("latytudService", ["$http", function($http) {
    return {
      fetchLeftMenu : function() {
        return $http.get('json/leftMenu.json')
      }
    }
}])
