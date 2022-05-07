const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://af41-181-93-76-168.ngrok.io',
      changeOrigin: true,
    })
  );
};