const express = require("express");
const usersRoutes = require("./user");
const meetingsRoutes = require("./meetings")
const feedbackRoutes = require("./feedback")
const questionsRoutes = require("./questions")
const genericRoutes = require("./genericSlots")
const router = express.Router();

module.exports = router;

router.use("/users", usersRoutes);
router.use("/meetings", meetingsRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/questions", questionsRoutes);
router.use("/genericslots", genericRoutes);
