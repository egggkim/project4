(function(){

  // Routing for my SPA app

  angular
    .module('app')
    .config(config)
    .run(run);

    function config($routeProvider, $locationProvider){

      // Define the routes
      $routeProvider
      // when you are in the default page
      .when('/', {
        title: 'Welcome to Floralist',
        templateUrl: 'calendar.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/todos', {
        templateUrl: 'todo.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/addressbook', {
        templateUrl: 'addressbook.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      
      .otherwise({
        redirectTo: '/'
      });
    };

    function run($location, $rootScope){

      var changeRoute = function(event, current, previous){
        // event is any time something changes
        // current page you're on
        // previous page you were on
        return $rootScope.title = current.$$route.title;
        // title refers to the title in the routes
      }

      $rootScope.$on('$routeChangeSuccess', changeRoute);
    };

})();