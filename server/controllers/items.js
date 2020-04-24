const Item = require("../models/item");

exports.get = async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(500).send();
  }
};
