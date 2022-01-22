const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { getUsersList, updateUser, deleteUser, getProfile } = require("../controllers/user");
const { login, register } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/profile", auth, getProfile);
router.get("/users", getUsersList);
router.patch("/user", auth, updateUser);
router.delete("/user", auth, deleteUser);

module.exports = router;
