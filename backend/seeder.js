import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import shops from './data/shops.js';
import newShops from './data/newShops.js';
import User from './models/userModel.js';
import Shop from './models/shopModel.js';
import AddedShop from './models/addedShopModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

//delete data from database is the first portion of the function
//the await returns a promise that resolves after the data is deleted from there the data is inserted into the database through the insertMany method and the data is imported
const importData = async () => {
  try {
    await AddedShop.deleteMany();
    await Shop.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const currentShops = shops.map((shop) => {
      return { ...shop, user: adminUser };
    });

    const createdShops = await Shop.insertMany(currentShops);

    const newShopsWithShop = newShops.map((newShop) => {
      return { ...newShop, shop: createdShops._id, user: adminUser };
    });

    await AddedShop.insertMany(newShopsWithShop);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

//destroy data is the second portion of the function
//the await returns a promise that resolves after the data is deleted from there the data is inserted into the database through the insertMany method and the data is imported
const destroyData = async () => {
  try {
    await AddedShop.deleteMany();
    await Shop.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

//the process.argv[2] is a command line argument that is passed to the function
//if the argument is -d then the destroyData function is called
//if the argument is -i then the importData function is called
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
