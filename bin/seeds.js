require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('../models/restaurants');
const restaurants = require('./restaurants');
mongoose.connect(process.env.MONGODB_URI);


Restaurant.create(restaurants, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${restaurants.length} restaurants`)
  mongoose.connection.close()
});