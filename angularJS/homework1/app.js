(function () {
  'use strict';
  angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope']
  function LunchCheckController ($scope){
    $scope.fooditem = "";
    $scope.messageOut = "";
    $scope.checkItems = function () {
      if($scope.fooditem){
        var dishes = $scope.fooditem.split(',');
        var num = 0;
        var i; //item counter
        for (i in dishes) { // empty string doesn't count
          if(!(dishes[i].length == 0 || !dishes[i].trim())){
            num += 1;
          }
        }
        if(num > 3 ){
          $scope.messageOut = "Too much!";
        } else {
          $scope.messageOut = "Enjoy!";
        }
      }
      else {
        $scope.messageOut = "Please enter data first";
      }
    };
  };
})();
