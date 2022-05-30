const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://67f4-2803-9800-9442-b305-e9a1-b48d-cc3b-33.ngrok.io',
      changeOrigin: true,
    })
  );
};