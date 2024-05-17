import asyncHandler from '../middleware/asyncHandler.js';
import Shop from '../models/shopModel.js';

// @desc    Fetch all shops
// @route   GET /api/shops
// @access  Public
const getShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find({});
  res.json(shops);
});
//:id is a placeholder for whatever id is injected into the url
//using "find" to find the shop with the id that matches the id in the url, only if the shop id matches the id in the url, then return the shop.json
// @desc    Fetch single shop
// @route   GET /api/shops/:id
// @access  Public
const getShopById = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id);
  if (shop) {
    res.json(shop);
  } else {
    res.status(404);
    throw new Error('Shop not found');
  }
  res.json(shop);
});

export { getShops, getShopById };
