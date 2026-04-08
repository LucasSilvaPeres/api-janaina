class OrderModel {
  constructor() {
    this.orders = [];
  }

  getAll() {
    return this.orders;
  }

  create(clientId, vehicleId) {
    const newOrder = {
      id: Date.now().toString(),
      clientId,
      vehicleId,
      date: new Date(),
    }
    this.orders.push(newOrder);
    return newOrder
  }

}
module.exports = new OrderModel();