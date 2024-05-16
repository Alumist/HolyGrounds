import mongoose from 'mongoose';

const addedShopSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },

    newShop: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        socials: { type: String, required: true },
        location: { type: Number, required: true },
        address: { type: Number, required: true },
        shop: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Shop',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const AddedShop = mongoose.model('AddedShop', addedShopSchema);

export default AddedShop;
