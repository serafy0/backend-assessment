const { Router } = require("express");
const router = Router();
require("dotenv").config();

const { searchRestaurant } = require("../controllers/restaurant");

router.route("/search").post(searchRestaurant);
module.exports = router;
