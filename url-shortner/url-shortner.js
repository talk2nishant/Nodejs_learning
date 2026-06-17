import http from 'http';
import { v4 as uuidv4 } from "uuid";

const urlDatabase = {};

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/shorten') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            console.log("chunk data", chunk.toString());
        });
        req.on('end', () => {
            const { longUrl } = JSON.parse(body);
            const shortUrl = uuidv4().slice(0, 8);
            urlDatabase[shortUrl] = longUrl;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ shortUrl }));
        });
    } else if (req.method === 'GET') {
        const shortUrl = req.url.slice(1);
        const longUrl = urlDatabase[shortUrl];
        if (longUrl) {
            res.writeHead(302, { 'Location': longUrl });
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('URL not found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});


server.listen(3000, () => {
    console.log('URL Shortener service is running on http://localhost:3000');
});