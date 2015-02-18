angular
  .module("app")
  .controller("EventsController", EventsController);

  EventsController.$inject = ['$http'];

  function EventsController($http){
    var self = this;

    self.eventList = [];
    self.addEvent  = addEvent;

    $http.get("/api/events").
      success(function(data, status, headers, config) {
        console.log(data);
        self.eventList = data.events;
      });

    function addEvent(){
      $http({
        url: "/api/events",
        method: "POST",
        data: {
          'address': self.address,
          'date': self.date,
          'start_time': self.start_time,
          'end_time': self.end_time
        }
      })
      .success(function(data) {
        self.eventList;
      })
      .error(function(data, status) {
        console.log(status);
        $("#event-error").text("problemz")
      });
    }  
  }
  