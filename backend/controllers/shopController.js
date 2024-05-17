import asyncHandler from '../middleware/asyncHandler';
import Shop from '../models/shopModel.js';

//fetches shops from the database
//get api/shops
//access public
const getShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find({});
  res.json(shops);
});

//fetches a single shop from the database
//get api/shops/:id
//access public
const getShopById = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id);
  if (shop) {
    return res.json(shop);
  } else {
    res.status(404);
    throw new Error('Shop not found');
  }
});

export { getShops, getShopById };
