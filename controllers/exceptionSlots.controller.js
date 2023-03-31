const exceptionSlotsService = require("../dal/exceptionSlots.dal")
const exceptionSlotsValidator = require("../validators/exceptionSlot.validator");
const CONST = require("../const");

module.exports = {
  createExceptionSlot,
  getExceptionSlots,
  getExceptionSlotById,
  updateExceptionSlot,
  deleteExceptionSlot,
};

async function createExceptionSlot(req, res) {
  const reqBody = req.body;
  const { error } = exceptionSlotsValidator.exceptionSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const exceptionSlot = await exceptionSlotsService.createExceptionSlot(reqBody);
  res.send({ exceptionSlot });
}

async function getExceptionSlots(req, res) {
  let exceptionSlot = await exceptionSlotsService.getExceptionSlots();
  res.send(exceptionSlot);
}

async function getExceptionSlotById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let exceptionSlot = await exceptionSlotsService.getExceptionSlotById(id);
  if (!exceptionSlot) {
    return res.send({ message: `${CONST.NO_EXCEPTION_SLOT}` });
  }
  else res.send(exceptionSlot);
}

async function updateExceptionSlot(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = exceptionSlotsValidator.exceptionSlotSchema.validate(reqObject);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateExceptionSlot = await exceptionSlotsService.updateExceptionSlot({
    where: { id },
    data: reqObject,
  });
  res.send(updateExceptionSlot);
}

async function deleteExceptionSlot(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteExceptionSlot = await exceptionSlotsService.deleteExceptionSlot(id);
  res.send(deleteExceptionSlot);
}
