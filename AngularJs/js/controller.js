angular.module('tfo')
  .controller('Main', function ($scope, $resource) {
    // Fetch data
    var Video = $resource('/api/videos.json');
    $scope.videos = Video.query(function () {
      // Build authors list
      $scope.authors = {};
      angular.forEach($scope.videos, function(currVid) {
        $scope.authors[currVid.author.id] = currVid.author;
      })
    });

  })
  .controller('Profile', function ($scope, $stateParams) {
    $scope.$watch("authors", function(authors) {
      $scope.author = authors[$stateParams.id];
    }, true);
  })
  .controller('Video', function ($scope, $stateParams, $filter) {
    $scope.$watch("videos", function(videos) {
      $scope.video = $filter('getById')(videos, $stateParams.vid);
    }, true);
  });