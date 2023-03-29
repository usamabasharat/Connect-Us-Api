const express = require("express");
const asyncHandler = require("express-async-handler");
const attendeesCtrl = require("../controllers/attendees.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(attendeesCtrl.createAttendees));
router.get("/", asyncHandler(attendeesCtrl.getAttendees));
router.get("/:id", asyncHandler(attendeesCtrl.getAttendeesById));
router.put("/:id" , asyncHandler(attendeesCtrl.updateAttendees))
router.delete("/:id" , asyncHandler(attendeesCtrl.deleteAttendees))
