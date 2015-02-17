angular
  .module("app")
  .controller("EventsController", EventsController);

  EventsController.$inject = ['$http'];

  function EventsController($http){
    var self = this;

    self.eventList = [];
    $http.get("http://localhost:3000/api/events").
      success(function(data, status, headers, config) {
        console.log(data);
        self.eventList = data.events;
      });
  }
  