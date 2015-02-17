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
        title: 'floristt',
        templateUrl: 'index.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/calendar', {
        title: "calendar",
        templateUrl: 'calendar.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/todo', {
        title: "todos",
        templateUrl: 'todo.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/addressbook', {
        title: "address book",
        templateUrl: 'addressbook.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/about', {
        title: "about",
        templateUrl: 'about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/contact', {
        title: "contact",
        templateUrl: 'contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/events', {
        title: "events",
        templateUrl: 'event.html',
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