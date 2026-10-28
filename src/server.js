const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  console.log(`WSDL Conversiones: http://localhost:${PORT}/soap/conversiones?wsdl`);
  console.log(`WSDL Geometría: http://localhost:${PORT}/soap/geometria?wsdl`);
});