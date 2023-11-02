const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      require: true,
      autopopulate: true,
    },
    driver: { type: String, require: true },
    date: { type: Date, default: Date.now },
    mileage: { type: Number, require: true },
    description:{type:String,require:true},
  },
  {
    collection: "Record",
  }
);
recordSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model("Record", recordSchema);
