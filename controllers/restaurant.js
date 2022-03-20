const Restaurant = require("../models/restaurant");

exports.searchRestaurant = async (req, res, next) => {
  try {
    const { searchString } = req.body;
    const { page, numPerPage } = req.query;
    const restraunts = await Restaurant.find({
      $text: { $search: searchString },
    })
      .skip(page)
      .limit(numPerPage);

    if (restraunts === []) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    return res.status(200).json({
      restraunts,
    });
  } catch (err) {
    next(err);
  }
};
