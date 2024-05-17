import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import shopRoutes from './routes/shopRoutes.js';
//to access the environment variable, we use process.env.PORT "process.env..."
const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.get('/', (req, res) => {
  res.send('api running');
});

app.use('/api/shops', shopRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
