angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name:'home',
    url: '/home',
    templateUrl: 'app/home/home.html'
  })
  .state({
    name: 'overview',
    url: '/overview',
    templateUrl: 'app/home/overview.html'
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
