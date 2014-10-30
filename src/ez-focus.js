angular.module('ez.focus', []).directive('ezFocus', ['$timeout', function ($timeout) {
  return {
    link: function (scope, element, attrs) {
      $timeout(function () {
        element[0].focus();

        if (attrs.ezFocus === 'true') {
          element[0].select();
        }
      }, 50);
    }
  };
}]);
