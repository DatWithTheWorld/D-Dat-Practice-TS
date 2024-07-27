import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.join(path.dirname(__dirname), 'public');

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});