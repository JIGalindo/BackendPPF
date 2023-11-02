const mongoose = require ('mongoose');

const carSchema = mongoose.Schema(
    {
        plate:{type :String, require: true},
        brand:{type: String, require:true},
        model:{type: String, require:true}

    },
    {
        collection:"Car"
    }
);

module.exports= mongoose.model("Car", carSchema)