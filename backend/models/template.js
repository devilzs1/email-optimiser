const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
        required: true,
    },
    description: {
      type: String,
    //   required: true,
    },
    html: {
        type: String,
        required: true,
    },
    saved_name:{
        type: String,
    },
    saved: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", templateSchema);
