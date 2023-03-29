const express = require("express");
const asyncHandler = require("express-async-handler");
const questionCtrl = require("../controllers/questions.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(questionCtrl.createQuestion));
router.get("/", asyncHandler(questionCtrl.getQuestions));
router.get("/:id", asyncHandler(questionCtrl.getQuestionById));
router.put("/:id" , asyncHandler(questionCtrl.updateQuestion));
router.delete("/:id" , asyncHandler(questionCtrl.deleteQuestion));
