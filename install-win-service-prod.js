const Service = require("node-windows").Service;
const path = require("path");

const svc = new Service({
  name: "nodejs_test_service",
  description: "testing",
  script: path.join(__dirname, "prod-build/main.js"),
});

svc.on("install", function () {
  svc.start();
});

svc.install();
