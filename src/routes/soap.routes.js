const express = require('express');
const soap = require('soap');
const path = require('path');
const fs = require('fs');

const conversionesService = require('../services/conversiones.service');
const geometriaService = require('../services/geometria.service');

const router = express.Router();

const conversionesWsdl = fs.readFileSync(
  path.join(__dirname, '../../wsdl/conversiones.wsdl'),
  'utf8'
);
const geometriaWsdl = fs.readFileSync(
  path.join(__dirname, '../../wsdl/geometria.wsdl'),
  'utf8'
);

// Registrar endpoints SOAP dentro del Router
soap.listen(router, '/conversiones', conversionesService, conversionesWsdl);
soap.listen(router, '/geometria', geometriaService, geometriaWsdl);

module.exports = router;