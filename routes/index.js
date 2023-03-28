const express = require("express");
const usersRoutes = require("./user");
const meetingsRoutes = require("./meetings")
const router = express.Router();

module.exports = router;

router.use("/users", usersRoutes);
router.use("/meetings", meetingsRoutes);
