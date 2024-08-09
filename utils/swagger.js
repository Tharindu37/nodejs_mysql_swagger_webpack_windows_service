const swaggerJSDoc = require("swagger-jsdoc");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       titie: "Node js API Project for mysql",
//       version: "1.0.0",
//     },
//     servers: [
//       {
//         url: "http://localhost:3005/",
//       },
//     ],
//   },
//   apis: ["../routes/*.js"],
// };

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Node js API Project for mysql",
    version: "1.0.0",
    description: "My API Description",
  },
  servers: [
    {
      url: "http://localhost:3005/",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js", "./index.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
