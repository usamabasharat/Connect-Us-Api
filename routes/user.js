const express = require("express");
const asyncHandler = require("express-async-handler");
const userCtrl = require("../controllers/user.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(userCtrl.createUser));
router.post("/login", asyncHandler(userCtrl.loginUser));
router.post("/forgotpassword", asyncHandler(userCtrl.updatePassword));
router.get("/", asyncHandler(userCtrl.getUsers));
router.get("/:email", asyncHandler(userCtrl.getUserByEmail));
router.put("/:id" , asyncHandler(userCtrl.updateUser))
router.delete("/:id" , asyncHandler(userCtrl.deleteUser))