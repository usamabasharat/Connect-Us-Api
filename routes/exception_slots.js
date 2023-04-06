const express = require("express");
const asyncHandler = require("express-async-handler");
const exceptionSlotsCtrl = require("../controllers/exceptionSlots.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(exceptionSlotsCtrl.createExceptionSlot));
router.get("/", asyncHandler(exceptionSlotsCtrl.getExceptionSlots));
router.get("/:id", asyncHandler(exceptionSlotsCtrl.getExceptionSlotById));
router.put("/:id" , asyncHandler(exceptionSlotsCtrl.updateExceptionSlot))
router.delete("/:id" , asyncHandler(exceptionSlotsCtrl.deleteExceptionSlot))
