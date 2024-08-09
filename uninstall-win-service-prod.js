const Service = require("node-windows").Service;
const path = require("path");

const svc = new Service({
  name: "nodejs_test_service",
  description: "testing",
  script: path.join(__dirname, "prod-build/main.js"),
});

svc.on("uninstall", function () {
  console.log("Service uninstalled successfully.");
  console.log("The service exists: ", svc.exists);
});

svc.uninstall();
