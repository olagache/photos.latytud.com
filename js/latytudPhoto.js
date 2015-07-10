// declare a module
var myAppModule = angular.module('latytudPhotoApp', []);

myAppModule.controller('LeftMenuController', ['$http', function('$http) {
  $http.get('/json/leftMenu.json').success(function(data){
    this.leftMenu = data.leftMenu;
  });
}]);
