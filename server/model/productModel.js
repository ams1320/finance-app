const mongoose = require("mongoose")
const {loadType} =require("mongoose-currency")
const Schema = mongoose.Schema;

loadType(mongoose)


  
  const ProductSchema = new Schema(
    {
      price: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      expense: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      transaction: [{
        type: mongoose.Types.ObjectId,
        ref :"Transaction"
      }]
    
    },
    { timestamps: true, toJSON: { getters: true } }
  );
  
  const Product = mongoose.model("Product", ProductSchema);
  
  module.exports = Product;
