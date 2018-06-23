angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name:'home',
    url: '/home',
    templateUrl: 'app/home.html'
  })
  .state({
    name: 'tour',
    url: '/tour',
    templateUrl: 'app/home/tour/tour.html'
  })
  .state({
    name: 'tour.info',
    url: '/info',
    templateUrl: 'app/home/tour/info.html'
  })
  .state({
    name: 'signUp',
    url: '/signUp',
    controller: 'SignupController',
    templateUrl: 'app/home/signup/signUp.html'
  })
  .state({
    name: 'thankYou',
    url: '/thankYou',
    templateUrl: 'app/home/signup/thankYou.html'
  })
})
