const mongoose = require("mongoose");
// const { Schema } = mongoose;

const catSchema = new mongoose.Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
