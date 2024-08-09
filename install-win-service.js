const Service = require("node-windows").Service;
const path = require("path");

const svc = new Service({
  name: "nodejs_test_service",
  description: "testing",
  script: path.join(__dirname, "dev-build/main.js"),
});

svc.on("install", function () {
  svc.start();
});

svc.on("start", function () {
  console.log("Service started successfully.");
});

svc.on("stop", function () {
  console.log("Service stopped successfully.");
});

function restartService() {
  svc.stop();

  svc.on("stop", function () {
    svc.start(); // Start the service
  });
}

svc.install();
