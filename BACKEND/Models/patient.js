const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({

    name :{
        type : String,
        required : true
    },

    email :{
        type : String,
        required : true
    },

    age:{
        type : Number,
        required : true
    },

    gender:{
        type : String,
        required : true
    },

    address:{
        type : String,
        required : true
    },

    tpNumber: {
        type: String,
        required : true
    },

    service: {
        type: String,
        required : true
    },

    time: {
        type: String,
        required : true
    },

    date: {
        type: Date,
        required : true
    },

    price: {
        type: Number,
        required: true
    }

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
