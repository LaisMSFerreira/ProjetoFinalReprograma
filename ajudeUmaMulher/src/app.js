require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./dataBase/dbConnect");
const gruposDeApoioRoutes = require("./Routes/gruposDeApoioRoutes");

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

const app = express();
app.use(express.json());
app.use(cors());
mongoose();

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/grupos", gruposDeApoioRoutes);

module.exports = app;