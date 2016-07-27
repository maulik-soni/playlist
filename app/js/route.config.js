app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
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