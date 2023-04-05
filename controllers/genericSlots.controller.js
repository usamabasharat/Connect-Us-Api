const genericService = require("../dal/genericSlots.dal")
const genericValidator = require("../validators/genericSlots.validator")
const CONST = require("../const");

module.exports = {
  createGenericSlot,
  getGenericSlots,
  getGenericSlotById,
  updateGenericSlot,
  deleteGenericSlot,
};

async function createGenericSlot(req, res) {
  const {GenericSlots,...reqBody} = req.body;
  const { error } = genericValidator.genericSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const genericSlot = await genericService.createGenericSlot(reqBody);
  if (typeof genericSlot === 'string'){
    return res.send({message: genericSlot})
  }else{
  res.send({ genericSlot })
  };
}

async function getGenericSlots(req, res) {
  let genericSlots = await genericService.getGenericSlots();
  res.send(genericSlots);
}

async function getGenericSlotById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let genericSlot = await genericService.getGenericSlotById(id);
  if (!genericSlot) {
    return res.send({ message: `${CONST.NO_GENERIC_SLOT}` });
  } 
  else res.send(genericSlot);
}

async function updateGenericSlot(req, res) {
  let { id } = req.params;
  id = String(id);
  const {GenericSlots,...reqBody} = req.body;
  const { error } = genericValidator.genericSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateGenericSlot = await genericService.updateGenericSlot({
    where: { type: id },
    data: reqBody,
  });
  res.send({updateGenericSlot, message: CONST.UPDATE_GENERIC_SLOT});
}

async function deleteGenericSlot(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteGenericSlot = await genericService.deleteGenericSlot(id);
  res.send(deleteGenericSlot);
}
