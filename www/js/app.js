// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('kingsden', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeController'
  })
  .state('home.menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html'
  })
  .state('home.dinner', {
    url: '/dinner',
    templateUrl: 'templates/dinner.html'
  })
  .state('home.monthlyExpense', {
    url: '/monthlyExpense',
    templateUrl: 'templates/monthlyExpense.html'
  })
  .state('home.unplannedExpenses', {
    url: '/unplannedExpenses',
    templateUrl: 'templates/unplannedExpenses.html'
  })
  .state('home.payable', {
    url: '/payable',
    templateUrl: 'templates/payable.html'
  })
  .state('home.paid', {
    url: '/paid',
    templateUrl: 'templates/paid.html'
  })
  .state('home.settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
