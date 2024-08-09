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

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: This API is used to insert customers
 *     description: Fetches all customers from MySQL database
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Customer'
 */
router.post("/customers", customerController.createCustomer);

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

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: This API is used to delete a customer by ID
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
 *         description: Customer deleted successfully.
 */
router.delete("/customers/:id", customerController.deleteCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: This API is used to update customers
 *     description: Fetches all customers from MySQL database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Customer'
 */
router.put("/customers/:id", customerController.updateCustomer);

module.exports = router;
