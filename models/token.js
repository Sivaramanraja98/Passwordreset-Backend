const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Schema for Token
const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "user",
		unique: true,
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});

//Exporting Schema
module.exports = mongoose.model("token", tokenSchema);
