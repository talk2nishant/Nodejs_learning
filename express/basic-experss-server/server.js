import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  // res.send('Hello World!');
  const filePath = path.resolve('index.html');
  res.sendFile(filePath); 
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) 