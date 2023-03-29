const express = require("express");
const asyncHandler = require("express-async-handler");
const feedbackCtrl = require("../controllers/feedback.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(feedbackCtrl.createFeedback));
router.get("/", asyncHandler(feedbackCtrl.getFeedback));
router.get("/:id", asyncHandler(feedbackCtrl.getFeedbackById));
router.put("/:id" , asyncHandler(feedbackCtrl.updateFeedback))
router.delete("/:id" , asyncHandler(feedbackCtrl.deleteFeedback))
