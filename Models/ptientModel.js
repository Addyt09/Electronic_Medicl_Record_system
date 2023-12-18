const { model } = require("mongoose");

const mongoose =require('mongoose');

const ptientSchema = new mongoose.Schema(
    {
        ptientID: String,
        surnme:String,
        othernmes:String,
        gender:String,
        residentildress:String,
        emergencyNme:String,
        emergencyContct:{
            nme:String,
            contct:String,
            reltinship:String,
        }
    },
    {
        timestamp: true
    }
)

const Ptient = mongoose.model('Ptient', ptientSchema);

model.exports = Ptient;