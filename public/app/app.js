angular
.module('app', ['ui.router', 'app.signup'])
  .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state({
        name:'home',
        url: '/home',
        templateUrl: 'app/home.html'
      })
      .state({
        name: 'tour',
        url: '/tour',
        templateUrl: 'app/tour/tour.html'
      })
      .state({
        name: 'tour.info',
        url: '/info',
        templateUrl: 'app/tour/info.html'
      })

      $urlRouterProvider.otherwise('/home');
  });
