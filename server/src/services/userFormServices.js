const UserFormModel = require("../models/userFormModel")

const getAll = async () => await UserFormModel.find();

const getById = async (id) => await UserFormModel.findById(id);

const deleteById = async (id) => await UserFormModel.findByIdAndDelete(id);

const updateById = async (id, payload) =>
  await UserFormModel.findByIdAndUpdate(id, payload, { new: true });

const post = async (payload) => await UserFormModel.create(payload);

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById,
  post,
};