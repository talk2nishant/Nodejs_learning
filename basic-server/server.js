const http = require('http');

const userData = [
    {
      "id": "u001",
      "name": "Amit Sharma",
      "email": "amit.sharma@example.com",
      "age": 28,
      "role": "user",
      "isActive": true,
      "createdAt": "2026-05-01T10:15:30.000Z"
    },
    {
      "id": "u002",
      "name": "Priya Verma",
      "email": "priya.verma@example.com",
      "age": 24,
      "role": "admin",
      "isActive": true,
      "createdAt": "2026-05-03T08:20:10.000Z"
    },
    {
      "id": "u003",
      "name": "Rahul Mehta",
      "email": "rahul.mehta@example.com",
      "age": 32,
      "role": "user",
      "isActive": false,
      "createdAt": "2026-05-05T14:45:00.000Z"
    },
    {
      "id": "u004",
      "name": "Neha Gupta",
      "email": "neha.gupta@example.com",
      "age": 27,
      "role": "user",
      "isActive": true,
      "createdAt": "2026-05-07T12:10:05.000Z"
    },
    {
      "id": "u005",
      "name": "Arjun Singh",
      "email": "arjun.singh@example.com",
      "age": 30,
      "role": "moderator",
      "isActive": true,
      "createdAt": "2026-05-10T09:00:00.000Z"
    }
  ]

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(userData));
    res.end();

});

const PORT = 8080;
 

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})