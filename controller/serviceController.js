
const Service = require('../model/service.js');

// Add a new service
exports.addService = async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || price == null) {
        return res.status(400).send('Name, description, and price are required.');
    }

    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json(newService);
};

// Get all services
exports.getAllServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
};

// Update a service
exports.updateService = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name || !description || price == null) {
        return res.status(400).send('Name, description, and price are required.');
    }

    const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
    
    if (!updatedService) {
        return res.status(404).send('Service not found.');
    }

    res.json(updatedService);
};

// Delete a service
exports.deleteService = async (req, res) => {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
        return res.status(404).send('Service not found.');
    }

    res.status(204).send();
};
