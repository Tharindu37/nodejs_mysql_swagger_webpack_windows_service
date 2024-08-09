const customerModel = require("../models/customer");

const getCustomers = (req, res) => {
  customerModel.getAllCustomers((err, customers) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve customers" });
      return;
    }
    res.status(200).json(customers);
  });
};

const createCustomer = (req, res) => {
  const newCustomer = req.body;
  customerModel.createCustomer(newCustomer, (err, customerId) => {
    if (err) {
      res.status(500).json({ error: "Failed to create customer" });
      return;
    }
    res.status(201).json({ id: customerId, ...newCustomer });
  });
};

const updateCustomer = (req, res) => {
  const customerId = req.params.id;
  const updatedCustomer = req.body;

  customerModel.updateCustomer(
    customerId,
    updatedCustomer,
    (err, affectedRows) => {
      if (err) {
        res.status(500).json({ error: "Failed to update customer" });
        return;
      }
      if (affectedRows === 0) {
        res.status(404).json({ error: "Customer not found" });
        return;
      }
      res.status(200).json({ id: customerId, ...updatedCustomer });
    }
  );
};

const deleteCustomer = (req, res) => {
  const customerId = req.params.id;

  customerModel.deleteCustomer(customerId, (err, affectedRows) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete customer" });
      return;
    }
    if (affectedRows === 0) {
      res.status(404).json({ error: "Customer not found" });
      return;
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  });
};

const getCustomer = (req, res) => {
  const customerId = req.params.id;

  customerModel.getCustomer(customerId, (err, customer) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve customer" });
      return;
    }
    if (!customer) {
      res.status(404).json({ error: "Customer not found" });
      return;
    }
    res.status(200).json(customer);
  });
};

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
};
