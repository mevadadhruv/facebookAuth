/* eslint-disable @typescript-eslint/indent */
import express from "express";
import bodyParser from "body-parser";
const apps = express();
// Use body parser to read JSON payloads
apps.use(express.json({ limit: "500mb" }));
apps.use(bodyParser.json());

apps.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "500mb",
  })
);

export default apps;
