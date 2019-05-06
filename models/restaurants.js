const mongoose     = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const RestaurantSchema = mongoose.Schema({

  id: Number,
  name: String,
  address: String,
  city: String,
  state: String,
  area: String,
  postal_code: String,
  country: String,
  phone: String,
  lat: Number,
  lng: Number,
  price: Number,
  reserve_url: String,
  mobile_reserve_url: String,
  image_url: String,
  coupons: Array

});

RestaurantSchema.plugin(findOrCreate);
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;