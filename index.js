const express = require('express');
const next = require('next');
const server = express();
server.use(express.json());

function init() {
  console.log('Starting Server');

  const dev = process.env.NODE_ENV !== 'production';
  const app = next({dev, dir: './'});
  const handle = app.getRequestHandler();
  const port = 80;

  app.prepare().then(() => {
    server.all('*', (req, res) => {
      return handle(req, res);
    });
  
    server.listen(port, (err) => {
      if (err) console.error(err);
      console.log(`Server listening on port: ${port}`);
    });
  })
}

init();

module.exports = {
  App: server,
  Init: init,
};