const express = require("express");
const usersRoutes = require("./user");
const meetingsRoutes = require("./meetings")
const exceptionSlotRoutes = require("./exception_slots")
const feedbackRoutes = require("./feedback")
const questionsRoutes = require("./questions")
const scheduledSlotsRoutes = require("./scheduleSlot")
const router = express.Router();

module.exports = router;

router.use("/users", usersRoutes);
router.use("/meetings", meetingsRoutes);
router.use("/exceptionslots", exceptionSlotRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/questions", questionsRoutes);
router.use("/scheduledslots", scheduledSlotsRoutes);
