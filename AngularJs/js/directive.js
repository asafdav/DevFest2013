angular.module('tfo').
  directive('youtube', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<iframe style="margin-top: 20px" src="{{src}}" frameborder="0" allowfullscreen></iframe>'
    }
  });
