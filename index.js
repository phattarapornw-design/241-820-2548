//กำหนดport
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนด server เมื่อเปิดใช้งาน
const reqirelistener = function(req, res) {
    res.writeHead(200);
    res.end('my first server');
}
// run
const server = http.createServer(reqirelistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
