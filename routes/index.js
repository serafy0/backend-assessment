const { Router } = require("express");
const router = Router();

const restaurantRouter = require("./restaurant");
router.use("/restaurant", restaurantRouter);

router.get("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = router;
