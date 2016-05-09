const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;
const publicDir = 'public';

http.createServer((req, res) => {
  const filePath = path.join(__dirname, publicDir, req.url);

  fs.access(filePath, fs.R_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.statusMessage = 'Not found';
      return res.end();
    }

    fs.createReadStream(filePath).pipe(res);
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
