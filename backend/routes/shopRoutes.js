import express from 'express';
const router = express.Router();
import shops from '../data/shops.js';
import { getShops, getShopById } from '../controllers/shopController.js';

router.get('/', (req, res) => {
    res.json(shops);
});

router.get('/:id', (req, res) => {
    const shop = shops.find((shop) => shop._id === req.params.id);
    res.json(shop);
});

// router.route('/').get(getShops);
// router.route('/:id').get(getShopById);

export default router;
