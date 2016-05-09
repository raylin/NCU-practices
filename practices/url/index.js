'use strcit';

const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const url = require('url');

http.createServer((req, res) => {
  const pathInfo = url.parse(req.url);
  const infoString = `path: ${pathInfo.path}\nquerystring: ${pathInfo.query}`;

  console.log(`you are visiting ${req.url}`);
  console.log(infoString);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(infoString);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
