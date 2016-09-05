angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {
var vm = this;

vm.packages = mainSrv.travelInfo;

});
