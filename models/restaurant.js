const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  adress: {
    building: String,
    street: String,
  },
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

module.exports = Restaurant = mongoose.model("Restaurant", restaurantSchema);
