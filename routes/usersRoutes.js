const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  getUsers,
  createusers,
  updateUser,
  deleteUsers,
} = require("../controller/usersController");

router.route("/").get(getUsers).post(upload.single("image"), createusers);
router
  .route("/:id")
  .put(upload.single("image"), updateUser)
  .delete(deleteUsers);

module.exports = router;
