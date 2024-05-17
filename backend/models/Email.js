const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    campaign_name:{
        type: String,
        required: true,
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
    template: {
      type: String,
      required: true,
    },
    variables: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);
