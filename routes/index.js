const express = require("express");
const usersRoutes = require("./user");
const meetingsRoutes = require("./meetings")
const exceptionSlotRoutes = require("./exception_slots")
const feedbacksRoutes = require("./feedbacks")
const questionsRoutes = require("./questions")
const genericRoutes = require("./genericSlots")
const scheduledSlotsRoutes = require("./scheduleSlots")
const attendeesRoutes = require("./attendees")
const router = express.Router();

module.exports = router;

router.use("/users", usersRoutes);
router.use("/meetings", meetingsRoutes);
router.use("/exceptionSlots", exceptionSlotRoutes);
router.use("/feedbacks", feedbacksRoutes);
router.use("/questions", questionsRoutes);
router.use("/genericSlots", genericRoutes);
router.use("/scheduledSlots", scheduledSlotsRoutes);
router.use("/attendees", attendeesRoutes);
