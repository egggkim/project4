angular
  .module("app")
  .controller("ClientsController", ClientsController);

 ClientsController.$inject = ['$http'];

  function ClientsController($http){
    var self = this;

    self.clientList   = [];  
    self.addClient    = addClient;
    self.updateClient = updateClient;
    self.deleteClient = deleteClient;

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
      })
      .success(function(data) {
        self.clientList;
        window.location.reload();
      })
      .error(function(data, status) {
        console.log(status)
        $('#client-error').text("There was an issue adding this client. Please make sure all fields have been input correctly and try again.")
      });
    }

    function updateClient(client) {
      $http({
        url: "/api/clients/" + client.id,
        method: "PATCH",
        data: {
          'first_name': self.first_name,
          'last_name': self.last_name,
          'email': self.email,
          'phone': self.phone,
        }
      })
      .success(function(data) {
        console.log("Successfully updated client information.")
        window.location.reload();
      })
      .error(function(data) {
        $('#todo-error').text("There was an issue updating this todo. Please try again.")
      })
    }

    function deleteClient(client) {
      $http({
        url: "/api/clients/" + client.id,
        method: "DELETE",
      })
      .success(function(data) {
        window.location.reload();
      })
    }
  }
  