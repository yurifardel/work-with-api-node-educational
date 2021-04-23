const express = require("express");
const routes = express.Router();

const PaginaController = require("../lib/controllers/PaginaController");

routes.post("/pagina", PaginaController.create);

module.exports = routes;
