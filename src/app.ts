import express from "express";
import bodyParser from "body-parser";
// @ts-ignore
import { RegisterRoutes } from "./routes/routes";

export const app = express();
import swaggerUi = require('swagger-ui-express');


const swaggerDoc = require('../src/routes/swagger.json');
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);