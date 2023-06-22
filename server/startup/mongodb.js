const mongoose = require("mongoose");
const kpiModel = require("./../model/KpisModel");
const Product = require("./../model/productModel");
const Transaction = require("./../model/transactionModel");
const data = require("../data/kpiData")
const products = require("../data/productData")
const transaction = require("../data/transactionData")

module.exports = function () {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_URL 
    ).then(async (res) => {
        console.log("databse connected");
    //    await mongoose.connection.db.dropDatabase();
    //    kpiModel.insertMany(data)
    //    Product.insertMany(products)
    //    Transaction.insertMany(transaction)
    })
        .catch((rej) => console.log(rej.message))
}

