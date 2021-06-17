const express = require("express");
const routes = express.Router();

const controller = require("../../controllers/user");

routes.post("/", controller.create);
routes.get("/", controller.read);
routes.put("/:id", controller.update);
routes.delete("/:id", controller.delete);

module.exports = routes;
