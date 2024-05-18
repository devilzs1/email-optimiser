const router = require("express").Router();

const campaignsRoute = require("./campaigns");

router.use("/api/campaigns", campaignsRoute);

module.exports = router;
