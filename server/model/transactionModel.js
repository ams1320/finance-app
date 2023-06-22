const mongoose = require("mongoose")
const {loadType} =require("mongoose-currency")
const Schema = mongoose.Schema;

loadType(mongoose)


  
  const TransactionSchema = new Schema(
    {
      buyer: {
        type: String,
        required:true
      },
      amount: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      productIds: [{
        type: mongoose.Types.ObjectId,
        ref :"Product"
      }]
    
    },
    { timestamps: true, toJSON: { getters: true } }
  );
  
  const Transaction = mongoose.model("Transaction", TransactionSchema);
  
  module.exports = Transaction;
