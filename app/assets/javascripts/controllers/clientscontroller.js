angular
  .module("app")
  .controller("ClientsController", ClientsController);

  ClientsController.$inject = ['$resource', '$http'];

  function ClientsController($resource, $http){
    var self = this;

    // var client = $resource("http://localhost:3000/api/clients/:id",
    //   { id: "@id" },
    //   {
    //     'index': { method: 'GET', isArray: true },
    //     'update': { method: 'PUT' }
    //   }
    // );

    self.clientList = [];
    $http.get("http://localhost:3000/api/clients").
      success(function(data, status, headers, config){
        console.log(data);
        self.clientList = data.clients;
      }) ;

    self.addClient    = addClient;        // CREATE
    self.updateClient = updateClient;     // UPDATE
    self.deleteClient = deleteClient;     // DESTROY

    // INDEX
    function getClients(){
      return Client.query();  // GET /api/clients
    }

    // CREATE
    function addClient(){
      var client = new Client();
      client.name = self.name;
      client.email = self.email;
      client.phone = self.phone;
      client.$save();  // POST /api/clients

      self.clientList.push(client);
      self.name = null;
      self.phone = null;
      self.email = null;
    }

    // UPDATE
    function updateClient(client){
      client.$update();   // PUT /api/clients/:id
    }

    // DESTROY
    function deleteClient(client){
      client.$delete();   // DESTROY /api/todos/:id

      self.clientList.splice(self.clientList.indexOf(client), 1);
    }
  }
  