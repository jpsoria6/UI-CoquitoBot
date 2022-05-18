const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://5da7-181-94-58-241.ngrok.io',
      changeOrigin: true,
    })
  );
};