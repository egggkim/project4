angular
  .module("app")
  .controller("ClientsController", ClientsController);

  ClientsController.$inject = ['$resource'];

  function ClientsController($resource){
    var self = this;

    var client = $resource("http://localhost:3000/api/clients/:id",
      { id: "@id" },
      {
        'update': { method: 'PUT' }
      }
    );

    self.addClient    = addClient;        // CREATE
    self.updateClient = updateClient;     // UPDATE
    self.deleteClient = deleteClient;     // DESTROY

    // INDEX
    function getClients(){
      return Client.query();  // GET /api/clients
    }

    // CREATE
    function addClient(){
      var clientList = new Client();
      clientList.name = self.name;
      clientList.email = self.email;
      clientList.phone = self.phone;
      clientList.$save();  // POST /api/clients

      this.clientList.push(clientList);
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
  