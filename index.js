const express = require("express");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customer");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./utils/swagger");

const app = express();
const PORT = 3005;

// Serve Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns Hello World!
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(bodyParser.json());
app.use("/api", customerRoutes);

app.listen(PORT, () => {
  console.log(`Listen Port ${PORT}`);
});
