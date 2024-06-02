import asyncHandler from '../middleware/asyncHandler.js';
import AddedShop from '../models/addedShopModel.js';

const shopVote = asyncHandler(async (req, res) => {
    const addedShops = await AddedShop.find({});
    res.json(addedShops);
    });

    const shopVoteId = asyncHandler(async (req, res) => {
        const voteShop = await AddedShop.findById(req.params.id);
        if (voteShop) {
          res.json(voteShop);
        } else {
          res.status(404);
          throw new Error('Shop not found');
        }
        res.json(voteShop);
      });
      
      export { shopVote, shopVoteId };