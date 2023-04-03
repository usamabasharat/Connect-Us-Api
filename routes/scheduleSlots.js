const express = require("express");
const asyncHandler = require("express-async-handler");
const scheduledSlotsCtrl = require("../controllers/scheduleSlot.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(scheduledSlotsCtrl.createScheduleSlots));
router.get("/", asyncHandler(scheduledSlotsCtrl.getScheduledSlots));
router.get("/:id", asyncHandler(scheduledSlotsCtrl.getScheduledSlotsById));
router.put("/:id" , asyncHandler(scheduledSlotsCtrl.updateScheduledSlots));
router.delete("/:id" , asyncHandler(scheduledSlotsCtrl.deleteScheduleSlots));
