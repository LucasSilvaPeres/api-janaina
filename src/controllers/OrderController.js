const orderModel = require('../models/OrderModel');
const clientModel = require('../models/ClientModel');
const vehicleModel = require('../models/VehicleModel');

class OrderController {
  list(req, res) {
    const orders = orderModel.getAll();
    const clients = clientModel.getAll();
    const vehicles = vehicleModel.getAll();
    const availableVehicles = vehicles.filter((vehicle) => vehicle.available);

    const ordersWithDetails = orders.map((order) => {
      const client = clients.find((item) => item.id === order.clientId);
      const vehicle = vehicles.find((item) => item.id === order.vehicleId);

      return {
        ...order,
        clientName: client ? client.name : 'Cliente não encontrado',
        vehicleName: vehicle
          ? `${vehicle.brand} ${vehicle.model} (${vehicle.year})`
          : 'Veículo não encontrado'
      };
    });

    res.render('orders', {
      orders: ordersWithDetails,
      clients,
      vehicles: availableVehicles,
      error: req.query.error,
      currentPage: 'orders'
    });
  }

  create(req, res) {
    const { clientId, vehicleId } = req.body;
    const vehicle = vehicleModel.findById(vehicleId);

    if (!vehicle || !vehicle.available) {
      return res.redirect('/orders?error=vehicle_unavailable');
    }

    orderModel.create(clientId, vehicleId);
    vehicleModel.markAsUnavailable(vehicleId);

    return res.redirect('/orders');
  }
}
module.exports = new OrderController();
