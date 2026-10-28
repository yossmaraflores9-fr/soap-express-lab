const loggerMiddleware = (req, res, next) => {
  const startTime = Date.now();
  const method = req.method;
  const url = req.originalUrl || req.url;

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;
    console.log(`[LOG] ${new Date().toISOString()} | Method: ${method} | URL: ${url} | Status: ${statusCode} | Time: ${duration}ms`);
  });

  next();
};

module.exports = loggerMiddleware;