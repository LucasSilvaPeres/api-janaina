const ClientModel = require('../models/ClientModel');

class ClientController {
  list(req, res) {
    const clients = ClientModel.getAll();
    res.render('clients', { clients, currentPage: 'clients' });
  }
  create(req, res) {
    const { name, email } = req.body;
    ClientModel.create(name, email);
    res.redirect('/clients');
  }
}
module.exports = new ClientController();
