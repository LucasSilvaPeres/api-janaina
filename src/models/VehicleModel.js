class VehicleModel {
  constructor() {
    this.vehicles = [];
  }

  getAll() {
    return this.vehicles;
  }

  create(brand, model, year) {
    const newVehicle = {
      id: Date.now().toString(),
      brand,
      model,
      year,
      available: true
    };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  findById(id) {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  deleteById(id) {
    this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
  }

  updateById(id, data) {
    const vehicle = this.findById(id);

    if (!vehicle) {
      return null;
    }

    vehicle.brand = data.brand;
    vehicle.model = data.model;
    vehicle.year = data.year;

    return vehicle;
  }

  markAsUnavailable(id) {
    const vehicle = this.findById(id);

    if (vehicle) {
      vehicle.available = false;
    }

    return vehicle;
  }
}
module.exports = new VehicleModel();