import express from 'express';
import shops from './data/shops.js';

const port = 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('api running');
});

app.get('/api/shops', (req, res) => {
  res.json(shops);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
