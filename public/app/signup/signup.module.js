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
    name: 'signUp.thankYou',
    url: '/thankYou',
    template: "<h2>Thank You</h2>"
  })
})
