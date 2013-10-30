angular
  .module('tfo', ['ui.router', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        template: '<ui-view ng-animate="\'view\'"></ui-view>',
        controller: 'Main'
      })
      .state('main.list', {
        url: '/',
        templateUrl : './list.html'
      })
      .state('main.profile', {
        url: '/profile/:id',
        templateUrl : './profile.html',
        controller: 'Profile'
      })
      .state('main.profile.video', {
        url: '/video/:vid',
        templateUrl : './video.html',
        controller: 'Video'
      });

    $urlRouterProvider.otherwise("/");
  })
