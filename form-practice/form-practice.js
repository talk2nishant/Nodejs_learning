const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => { 
    
    fs.readFile('form.html', 'utf-8', (error, data) => {
        if(error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('404 Not Found')
        }       
        res.writeHead(200, { 'Content-Type': 'text/html' })
         if (req.url === "/") {
           res.end(data);
         } else if (req.url === "/submit") {
           const userData = [];
           req.on("data", (chunk) => { 
            userData.push(chunk);
           });
           req.on("end", () => {
            const formData = Buffer.concat(userData).toString();
            const readableData = querystring.parse(formData);
            // const finalData = `Name: ${readableData.name}, Email: ${readableData.email}`;  
            const finalData = `Name: ${readableData.name}, Email: ${readableData.email}`

            fs.writeFileSync("userData.txt", (finalData))
          });
           res.end("<h1>Form submitted successfully!</h1>");
         }
    })           
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
}) 