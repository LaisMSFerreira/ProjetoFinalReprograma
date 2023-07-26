const mongoose = require("mongoose");
const gruposDeApoioSchema = new mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        name:{
            type: String,
            required: true,
            unique: true
        },
        localization:{
            type: String,
            required: true,
            unique: true
        },
        addres:{
            type: String,
            required: true,
        },
        phoneNumber:{
            type: Number,
            required: true,
            unique: true
        },
        attendence:{
            type: String,
            required: true
        },
        services:{
            type: String,
            required: true,
        },
        whatsappGroup:{
            type: Boolean,
            required: true,
        },
    },
    {timestamp: true},
)

const Model = mongoose.model("Grupos", gruposDeApoioSchema)

module.exports = Model