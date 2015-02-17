angular
  .module("app")
  .controller("ClientsController", ClientsController);

  ClientsController.$inject = ['$http'];

  function ClientsController($http){
    var self = this;

    self.clientList   = [];  
    self.addClient    = addClient;

    $http.get("/api/clients").
      success(function(data, status, headers, config) {
        self.clientList = data.clients;
      });

    function addClient(){
      $http({
        url: "/api/clients",
        method: "POST",
        data: {
          'first_name': self.first_name,
          'last_name': self.last_name,
          'email': self.email,
          'phone': self.phone,
        }
      });
    }

  }
  