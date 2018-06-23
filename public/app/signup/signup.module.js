angular
.module('app.signup', [])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'signUp',
    url: '/signUp',
    templateUrl: 'app/signup/signUp.html'
  })
  .state({
    name: 'thankYou',
    url: '/thankYou',
    templateUrl: 'app/signup/thankYou.html'
  })
})
