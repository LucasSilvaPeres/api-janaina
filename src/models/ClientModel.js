class ClientModel {
  constructor() {
    this.clients = [];
  }

  getAll() {
    return this.clients;
  }
  
  create(name, email) {
    const newClient = {
      id: Date.now().toString(),
      name,
      email
    }
    this.clients.push(newClient);
    return newClient
  }
}
module.exports = new ClientModel();