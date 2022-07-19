const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://3dfe-2803-9800-9442-b305-1d17-2d99-3490-d79d.ngrok.io',
      changeOrigin: true,
    })
  );
};