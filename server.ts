#!/usr/bin/env node

import {App} from "./src/app";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./src/routes";
import localPort from "./src/utility/local-port";

let app = new App([
  logger('dev'),
  express.json(),
  express.urlencoded({extended: false}),
  cookieParser()
], [
  indexRouter
]);

app.startListening(localPort);