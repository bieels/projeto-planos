const mongoose = require("mongoose");
const {Schema} = mongoose;

const planSchema = new Schema({
    title: String,
    price: String,
    desc1: String,
    desc2: String,
    desc3: String,
    appBasico: Boolean,
    appPremium: Boolean,
},
{
    timestamps: true
}
);

const Plan = mongoose.model("Plan", planSchema)

module.exports = Plan