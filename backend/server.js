import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './config/db.js';
import shops from './data/shops.js';
//to access the environment variable, we use process.env.PORT "process.env..."
const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.get('/', (req, res) => {
  res.send('api running');
});

app.get('/api/shops', (req, res) => {
  res.json(shops);
});

//:id is a placeholder for whatever id is injected into the url
//using "find" to find the shop with the id that matches the id in the url, only if the shop id matches the id in the url, then return the shop.json
app.get('/api/shops/:id', (req, res) => {
  const shop = shops.find((s) => s._id === req.params.id);
  res.json(shop);
});
app.listen(port, () => console.log(`Server running on port ${port}`));
