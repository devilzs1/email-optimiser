const mongoose = require("mongoose");

const campaignsSchema = new mongoose.Schema(
  {
    campaign_name:{
        type: String,
        required: true,
    },
    campaign_description:{
        type: String,
    },
    from: {
      type: String,
    //   required: true,
    },
    to:{
        type: Array,
        required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    html: {
      type: String,
      required: true,
    },
    design: {
      type: Object,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", campaignsSchema);
