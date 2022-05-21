const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://31a2-181-94-58-241.ngrok.io',
      changeOrigin: true,
    })
  );
};