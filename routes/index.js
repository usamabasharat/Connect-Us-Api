const express = require("express");
const usersRoutes = require("./user");
const meetingsRoutes = require("./meetings")
const exceptionSlotRoutes = require("./exception_slots")
const router = express.Router();

module.exports = router;

router.use("/users", usersRoutes);
router.use("/meetings", meetingsRoutes);
router.use("/exceptionslots", exceptionSlotRoutes);
