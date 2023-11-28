// app/models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Otros campos según tus necesidades
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
