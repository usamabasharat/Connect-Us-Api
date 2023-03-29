const express = require("express");
const asyncHandler = require("express-async-handler");
const exceptionSlotsCtrl = require("../controllers/exceptionSlots.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(exceptionSlotsCtrl.createExceptionSlots));
router.get("/", asyncHandler(exceptionSlotsCtrl.getExceptionSlots));
router.get("/:id", asyncHandler(exceptionSlotsCtrl.getExceptionSlotsById));
router.put("/:id" , asyncHandler(exceptionSlotsCtrl.updateExceptionSlots))
router.delete("/:id" , asyncHandler(exceptionSlotsCtrl.deleteExceptionSlots))
