const exceptionSlotsService = require("../dal/exceptionSlots.dal")
const exceptionSlotsValidator = require("../validators/exceptionSlot.validator");

module.exports = {
  createExceptionSlots,
  getExceptionSlots,
  getExceptionSlotsById,
  updateExceptionSlots,
  deleteExceptionSlots,
};

async function createExceptionSlots(req, res) {
  const reqBody = req.body;
  const { error } = exceptionSlotsValidator.exceptionSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  const exceptionSlot = await exceptionSlotsService.createExceptionSlots(reqBody);
  res.send({ exceptionSlot });
}

async function getExceptionSlots(req, res) {
  let exceptionSlot = await exceptionSlotsService.getExceptionSlots();
  res.send(exceptionSlot);
}

async function getExceptionSlotsById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let exceptionSlot = await exceptionSlotsService.getExceptionSlotsById(id);
  if (!exceptionSlot) {
    return res.send({ message: "Exceptional Slot does not exist" });
  }
  else res.send(exceptionSlot);
}

async function updateExceptionSlots(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = exceptionSlotsValidator.exceptionSlotSchema.validate({
    ...reqObject,
  });
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  let updateexceptionSlot = await exceptionSlotsService.updateExceptionSlots({
    where: { id },
    data: {
      ...reqObject,
    },
  });
  res.send(updateexceptionSlot);
}

async function deleteExceptionSlots(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteexceptionSlot = await exceptionSlotsService.deleteExceptionSlots(id);
  res.send(deleteexceptionSlot);
}
