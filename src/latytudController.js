angular.module("latytudPhotoApp").controller("LeftMenuController", function($scope, latytudService) {
  $scope.leftMenu;
  $scope.activeMenu;

  loadLeftMenu();

  function loadLeftMenu() {
    console.log("IN loadLeftMenu FROM LeftMenuController");
    latytudService.fetchLeftMenu()
      .success(function(data) {
        $scope.leftMenu = data.leftMenu;
        $scope.activeMenu = data.activeMenu;
        console.log("SUCCESS IN loadLeftMenu " + this.leftMenu);
      })
      .error(function(data, status, headers, config) {
        console.log("ERROR IN loadLeftMenu");
    });
  }
})
