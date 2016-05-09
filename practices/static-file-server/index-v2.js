'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const hostname = '127.0.0.1';
const port = 8080;
const publicDir = 'public';
const defaultIndex = 'index.html';

http.createServer((req, res) => {
  let tPath = req.url;

  if (req.url === '' || req.url === '/') {
    tPath = defaultIndex;
  }

  const filePath = path.join(__dirname, publicDir, tPath);

  fs.access(filePath, fs.R_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.statusMessage = 'Not found';
      return res.end();
    }

    
    res.setHeader('Content-Type', mime.lookup(filePath));
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
