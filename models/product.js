const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: {type :Number, required: true},
  description: {type: String, required: true},
  quantity: {type: Number, required: true},
  imageUrls: {type: Array,required: true},
  date: { type: Date, default: Date.now },
  userId: {type: String, required: true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
