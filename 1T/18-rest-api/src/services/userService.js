// app/services/userService.js
const UserModel = require('../models/userModel');

const getAllUsers = async () => {
  return await UserModel.find();
};

const getUserById = async (userId) => {
  return await UserModel.findById(userId);
};

const createUser = async (userData) => {
  return await UserModel.create(userData);
};

const updateUser = async (userId, userData) => {
  return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
};

const deleteUser = async (userId) => {
  return await UserModel.findByIdAndDelete(userId);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
