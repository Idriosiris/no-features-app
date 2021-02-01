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

initListeners();

app.startListening(localPort);

function initListeners() {
  app.theApp().on('error', onError);
}

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof localPort === 'string'
      ? 'Pipe ' + localPort
      : 'Port ' + localPort;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
