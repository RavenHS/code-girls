angular
.module('app.home')
.controller('SignupController', function($scope, $firebaseArray, Notification){
  //Load firebase users into $scope;
  var ref = firebase.database().ref('signup');

  $scope.add = function()
  {
    ref.push($scope.signup);
    Notification.success({message:"Sign-up Successful"});
    .state = 'thankYou'
  }

});
