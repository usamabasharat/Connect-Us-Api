const genericService = require("../dal/genericSlots.dal")
const genericValidator = require("../validators/genericSlots.validator")

module.exports = {
  createGenericSlot,
  getGenericSlot,
  getGenericSlotById,
  updateGenericSlot,
  deleteGenericSlot,
};

async function createGenericSlot(req, res) {
  const reqBody = req.body;
  const { error } = genericValidator.genericSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: 'Invalid Body', error });
  }
  const genericSlot = await genericService.createGenericSlot(reqBody);
  res.send({ genericSlot });
}

async function getGenericSlot(req, res) {
  let genericSlot = await genericService.getGenericSlots();
  res.send(genericSlot);
}

async function getGenericSlotById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let genericSlot = await genericService.getGenericSlotById(id);
  if (!genericSlot) {
    return res.send({ message: 'Generic Slot does not exist' });
  } 
  else res.send(genericSlot);
}

async function updateGenericSlot(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = genericValidator.genericSlotSchema.validate({
    ...reqObject,
  });
  if (error !== undefined) {
    return res.send({ message: 'Invalid Body', error });
  }
  let updateGenericSlot = await genericService.updateGenericSlot({
    where: { id },
    data: {
      ...reqObject,
    },
  });
  res.send(updateGenericSlot);
}

async function deleteGenericSlot(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteGenericSlot = await genericService.deleteGenericSlot(id);
  res.send(deleteGenericSlot);
}
