const VehicleModel = require('../models/VehicleModel');

class VehicleController {
  list(req, res) {
    const vehicles = VehicleModel.getAll();
    res.render('vehicles', { vehicles, currentPage: 'vehicles' });
  }

  create(req, res) {
    const { brand, model, year } = req.body;
    VehicleModel.create(brand, model, year);
    res.redirect('/vehicles');
  }

  delete(req, res) {
    const { id } = req.params;
    VehicleModel.deleteById(id);
    res.redirect('/vehicles');
  }

  edit(req, res) {
    const { id } = req.params;
    const vehicle = VehicleModel.findById(id);

    if (!vehicle) {
      return res.redirect('/vehicles');
    }

    return res.render('vehicle-edit', { vehicle, currentPage: 'vehicles' });
  }

  update(req, res) {
    const { id } = req.params;
    const { brand, model, year } = req.body;
    VehicleModel.updateById(id, { brand, model, year });
    res.redirect('/vehicles');
  }
}
module.exports = new VehicleController();
