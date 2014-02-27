angular.module('ez.focus', []).directive('ezFocus', ['$timeout', function ($timeout) {
  return {
    link: function (scope, element) {
      $timeout(function () {
        element[0].focus();
      }, 50);
    }
  };
}]);
