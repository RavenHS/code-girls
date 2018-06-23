// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLP7IuwMYPUVasEFwoc7Gh4WkeYnyTZsk",
  authDomain: "raven-3727b.firebaseapp.com",
  databaseURL: "https://raven-3727b.firebaseio.com",
  projectId: "raven-3727b",
  storageBucket: "raven-3727b.appspot.com",
  messagingSenderId: "292676388805"
};
firebase.initializeApp(config);

angular
.module('app', ['ui.router','firebase','ui-notification','app.home'])
.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});
