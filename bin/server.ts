#!/usr/bin/env node

import {App} from "../app";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

let app = new App([
  logger('dev'),
  express.json(),
  express.urlencoded({extended: false}),
  cookieParser()
]);

let port = normalizePort(process.env.PORT || '3000');

initListeners();

app.startListening(port);

function initListeners() {
  app.theApp().on('error', onError);
}

function normalizePort(val : string) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

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
