(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.textInserted = "";
  $scope.divStyle = "has-error";
  $scope.inputStyle = "glyphicon-remove";
  $scope.messageStyle = "text-danger";
  $scope.outputMessage = "";
  $scope.emptyItems= 0;


  $scope.checkLunchItems = function () {

    $scope.emptyItems= 0;
    var totalItems=0;
    var arrayOfStrings = $scope.textInserted.split(',');
    if (!(arrayOfStrings.length==1 && arrayOfStrings[0]=="")){
      for (var i = 0; i < arrayOfStrings.length; i++) {
        if (!arrayOfStrings[i]) $scope.emptyItems++;
      }
     totalItems=arrayOfStrings.length-$scope.emptyItems;
    }
   if (totalItems==0) {
     $scope.divStyle = "has-error";
     $scope.inputStyle = "glyphicon-remove";
     $scope.messageStyle = "text-danger";
     $scope.outputMessage='Please enter data first';
  } else {
    $scope.divStyle = "has-success";
    $scope.inputStyle = "glyphicon-ok";
    $scope.messageStyle = "text-success";
    if (totalItems>0 && totalItems<=3) {
         $scope.outputMessage='Enjoy!';
       }else if (totalItems>3) {
          $scope.outputMessage='Too much!';
       };
  };
};
};
})();
