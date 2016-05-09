'use strcit';

const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;


http.createServer((req, res) => {
  const reqHeaders = req.headers;
  console.log(reqHeaders);

  res.setHeader('NCU', 'only for you');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`your request header:\n${JSON.stringify(reqHeaders)}`);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
