const { response } = require("express");
const HostelUsers = require("../db/UsersSchema");

const getUsers = async (req, res) => {
  const getusers = await HostelUsers.find();
  return res.status(200).json(getusers);
};

const createusers = async (req, res) => {
  try {
    if (req.body.name && req.body.mobile) {
      const createUser = await HostelUsers.create({
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        image: `/uploads/${req.file?.filename}`,
        FathersName: req.body?.FathersName,
        price: req.body?.price,
      });
      return res
        .status(200)
        .json({ message: "Successfully created", createUser });
    }

    if (!req.body.name) {
      return res.status(400).send({ name: "Name is required." });
    }
    if (!req.body.mobile) {
      return res.status(400).send({ mobile: "Name is required." });
    } else {
      return res
        .status(400)
        .send({ name: "Title is required.", mobile: "mobile is required" });
    }
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const updatUser = await HostelUsers.findOneAndUpdate({ _id: id }, req.body);
    if (updatetask) {
      return res.status(200).json(updatUser);
    } else {
      return res.status(400).json({ message: "please provide a valid id." });
    }
  } else {
    return res.status(400).json({ message: "please provide a valid id." });
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;
  const deluser = await HostelUsers.findOneAndDelete({ _id: id });
  if (deluser) {
    return res.status(200).json(deluser);
  }
  if (!id) {
    return res.status(400).send({ message: "please provide a valid id." });
  } else {
    return res.status(400).send({ message: "Not match found" });
  }
};

module.exports = { getUsers, createusers, updateUser, deleteUsers };
