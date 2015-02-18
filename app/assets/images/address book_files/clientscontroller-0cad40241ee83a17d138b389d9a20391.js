angular
  .module("app")
  .controller("ClientsController", ClientsController);

  ClientsController.$inject = ['$http'];

  function ClientsController($http){
    var self = this;

    self.clientList   = [];  
    self.addClient    = addClient;
    // self.updateClient = updateClient;
    // self.deleteClient = deleteClient;

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

    // function updateClient(client) {
    //   $http({
    //     url: "/api/clients/:id",
    //     method: "PATCH",
    //     data: {
    //       'first_name': self.first_name,
    //       'last_name': self.last_name,
    //       'email': self.email,
    //       'phone': self.phone,
    //     }
    //   })
    //   .success(function(data) {
    //     self.clientList;
    //     window.location.reload();
    //   })
    //   .error(function(data) {
    //     console.log("cannot update")
    //   })
    // }

    // function deleteClient(client) {
    //   $http({
    //     url: "/api/clients/:id",
    //     method: "DELETE",
    //   })
    // }
  }
  
;
