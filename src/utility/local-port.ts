function normalizePort(val : string) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // localPort number
        return port;
    }

    return false;
}

export default normalizePort(process.env.PORT || '3000');