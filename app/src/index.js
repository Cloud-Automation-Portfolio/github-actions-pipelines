import http from 'http';
const port = process.env.PORT || 3000;
const server = http.createServer((_, res) => res.end('OK\n'));
server.listen(port, () => console.log(`listening on ${port}`));
