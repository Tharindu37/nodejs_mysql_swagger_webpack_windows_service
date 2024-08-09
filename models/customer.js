const connection = require("../db/connection");

const getAllCustomers = (callback) => {
  const query = "SELECT * FROM customers";
  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
};

const createCustomer = (customer, callback) => {
  const query = "INSERT INTO customers (name, email) VALUES (?, ?)";
  connection.query(query, [customer.name, customer.email], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results.insertId);
  });
};

const updateCustomer = (id, customer, callback) => {
  const query = "UPDATE customers SET name = ?, email = ? WHERE id = ?";
  connection.query(
    query,
    [customer.name, customer.email, id],
    (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results.affectedRows);
    }
  );
};

const deleteCustomer = (id, callback) => {
  const query = "DELETE FROM customers WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results.affectedRows);
  });
};

const getCustomer = (id, callback) => {
  const query = "SELECT * FROM customers WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results[0]); // Assuming id is unique and you want to return a single object.
  });
};

module.exports = {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
};
