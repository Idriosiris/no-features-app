#!/usr/bin/env node

import {App} from "../app1";

let app = new App().theApp();

let port = normalizePort(process.env.PORT || '3000');

app.listen(port, () => {
  console.log(`App listening on the http://localhost:${port}`)
})

app.on('error', onError);

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
