import mongoose from 'mongoose';

const addedShopSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    socials: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const AddedShop = mongoose.model('AddedShop', addedShopSchema);

export default AddedShop;
