const express = require("express");
const asyncHandler = require("express-async-handler");
const meetingsCtrl = require("../controllers/meetings.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(meetingsCtrl.createMeeting));
router.get("/", asyncHandler(meetingsCtrl.getMeetings));
router.get("/:id", asyncHandler(meetingsCtrl.getMeetingById));
router.put("/:id" , asyncHandler(meetingsCtrl.updateMeeting))
router.delete("/:id" , asyncHandler(meetingsCtrl.deleteMeeting))
