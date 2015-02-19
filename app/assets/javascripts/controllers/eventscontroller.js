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
          'title': self.text,
          'address': self.address,
          'date': self.date,
          'start_time': self.start_time,
          'end_time': self.end_time
        }
      })
      .success(function(data) {
        window.location.reload()
      })
      .error(function(data, status) {
        console.log(data, status);
        $("#event-error").text("There was an error adding this event. Please try again.")
      });
    }  
  }
  