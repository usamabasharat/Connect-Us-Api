const express = require("express");
const asyncHandler = require("express-async-handler");
const attendeesCtrl = require("../controllers/attendees.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(attendeesCtrl.createAttendee));
router.get("/", asyncHandler(attendeesCtrl.getAttendees));
router.get("/:id", asyncHandler(attendeesCtrl.getAttendeeById));
router.put("/:id" , asyncHandler(attendeesCtrl.updateAttendee))
router.delete("/:id" , asyncHandler(attendeesCtrl.deleteAttendee))
