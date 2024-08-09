const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: This API is used to get customers
 *     description: Fetches all customers from MySQL database
 *     responses:
 *       200:
 *         description: Success. Returns a list of customers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.createCustomer);

// Temp Endpoint for swagger
/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: This API is used to get a customer by ID
 *     description: Fetches a customer from the MySQL database using a numeric ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID required
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success. Returns the customer details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */
router.get("/customers/:id", customerController.getCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);
router.put("/customers/:id", customerController.updateCustomer);

module.exports = router;
