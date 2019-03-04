const next = require('next');
const helmet = require('helmet');
const express = require('express');

const routes = require('./routes');
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = routes.getRequestHandler(app);

const createServer = () => {
  const server = express();
  server.use(helmet());
  server.get('*', (req, res) => {
    if (process.env.LAMBDA) {
      let host = req.headers.host;
      let assetPrefix = 'https://' + host;
      if (host.indexOf('amazonaws.com') !== -1) {
        let stage = dev ? '/dev' : '/prod'
        assetPrefix += stage;
      }
      app.setAssetPrefix(assetPrefix);
    }
    handler(req, res)
  });
  return server;
};

const server = createServer();

if (!process.env.LAMBDA) {
  app.prepare().then(() => {
    server.listen(PORT, (err) => {
      if (err) throw err;
      // eslint-disable-next-line
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  });
}

exports.app = app;
exports.server = server;
