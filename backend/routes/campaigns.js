const router = require("express").Router();
const campaignsController = require("../controllers/campaigns");

router.post("/create-campaign", campaignsController.createCampaign);
router.get("/all-campaigns", campaignsController.getCampaign);


module.exports = router;
