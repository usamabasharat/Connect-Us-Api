const express = require("express");
const asyncHandler = require("express-async-handler");
const genericCtrl = require("../controllers/genericSlots.controller")

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(genericCtrl.createGenericSlot));
router.get("/", asyncHandler(genericCtrl.getGenericSlots));
router.get("/:id", asyncHandler(genericCtrl.getGenericSlotById));
router.put("/:id" , asyncHandler(genericCtrl.updateGenericSlot))
router.delete("/:id" , asyncHandler(genericCtrl.deleteGenericSlot))