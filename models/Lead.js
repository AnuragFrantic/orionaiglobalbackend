const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true,
        },
        last_name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String
        },
        phone: {
            type: Number
        },
        company_name: {
            type: String
        },

        message: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
