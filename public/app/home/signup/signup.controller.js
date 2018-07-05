angular
.module('app.home')
.controller('SignupController', function($scope, $firebaseArray, Notification, $state){
  //Load firebase users into $scope;
  var ref = firebase.database().ref('signup');

  $scope.add = function()
  {
    ref.push($scope.signup, function(){
      Notification.success({message:"Sign-up Successful"});
      $state.go('thankYou');
    });
  }

});
