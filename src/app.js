const express = require('express');
const loggerMiddleware = require('./middleware/logger.middleware');
const soapRouter = require('./routes/soap.routes');

const app = express();

// Middleware centralizado de registro (antes de las rutas)
app.use(loggerMiddleware);

// Rutas modulares SOAP
app.use('/soap', soapRouter);

module.exports = app;