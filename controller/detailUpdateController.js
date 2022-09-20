const { response } = require("express");
const HostelUpdate = require("../db/DetailUpdateSchema");
const getdetail = async (req, res) => {
  console.log("working");
  const getdetail = await HostelUpdate.find();
  return res.status(200).json(getdetail);
};
const createdetail = async (req, res) => {
  try {
    if (req.body.emptyRooms && req.body.totalPersons) {
      const createUsers = await HostelUpdate.create({
        emptyRooms: req.body?.emptyRooms,
        totalPersons: req.body?.totalPersons,
        totalBoys: req.body?.totalBoys,
        totalGirls: req.body?.totalGirls,
      });
      return res
        .status(200)
        .json({ message: "Successfully created", createUsers });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getdetail, createdetail };
