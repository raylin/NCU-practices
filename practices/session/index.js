'use strcit';

const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

http.createServer((req, res) => {
  const cookieContent = req.headers.cookie;
  
  res.setHeader('Set-Cookie', new Date().toString());
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (cookieContent) {
    res.end(`Hi you've visited at ${cookieContent}`);
  } else {
    res.end(`Hi new friend`); 
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
