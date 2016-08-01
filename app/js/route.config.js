app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $locationProvider.html5Mode(true).hashPrefix("!");
  $urlRouterProvider.otherwise("/playlist");
 
  $stateProvider
    .state('playlist', {
      url: "/playlist",
      templateUrl: "tpl/playlist.html"
    })
    .state('genere', {
      url: "/genere",
      templateUrl: "tpl/genere.html"
    });
});