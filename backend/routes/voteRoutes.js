import express from 'express';
const router = express.Router();
import { shopVote, shopVoteId } from '../controllers/voteController.js';

router.route('/').get(shopVote);
router.route('/:id').get(shopVoteId);

export default router;
