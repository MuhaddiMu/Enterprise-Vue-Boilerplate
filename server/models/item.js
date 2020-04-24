const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Item", ItemSchema);
