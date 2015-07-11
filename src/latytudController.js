angular.module('latytudPhotoApp').controller('LeftMenuController', function(latytudService) {
  this.leftMenu = {}
  this.activeMenu = {}

  latytudService.fetchLeftMenu().success(function(data){
    this.leftMenu = data.leftMenu;
    this.activeMenu = data.activeMenu;
    console.log(leftMenu);
  }).error(function(data, status, headers, config){
    console.log('data :' + data);
    console.log('status :' + status);
    console.log('headers :' + headers);
    console.log('config :' + config);
  });
})
