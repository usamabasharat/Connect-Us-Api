const scheduledSlotsService = require("../dal/scheduleSlot.dao")
const scheduledSlotsValidator = require("../validators/scheduledSlots.validator");
const CONST = require("../const");

module.exports = {
  createScheduleSlots,
  getScheduledSlots,
  getScheduledSlotsById,
  updateScheduledSlots,
  deleteScheduleSlots,
};

async function createScheduleSlots(req, res) {
  const reqBody = req.body;
  const { error } = scheduledSlotsValidator.scheduleSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const scheduledSlot = await scheduledSlotsService.createScheduleSlots(reqBody);
  res.send({ scheduledSlot });
}

async function getScheduledSlots(req, res) {
  let scheduledSlots = await scheduledSlotsService.getScheduledSlots();
  res.send(scheduledSlots);
}

async function getScheduledSlotsById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let scheduleSlot = await scheduledSlotsService.getScheduledSlotsById(id);
  if (!scheduleSlot) {
    return res.send({ message: `${CONST.NO_SCHEDULED_SLOT}` });
  }
  else res.send(scheduleSlot);
}

async function updateScheduledSlots(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = scheduledSlotsValidator.scheduleSlotSchema.validate({
    ...reqObject,
  });
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateScheduleSlot = await scheduledSlotsService.updateScheduledSlots({
    where: { id },
    data: {
      ...reqObject,
    },
  });
  res.send(updateScheduleSlot);
}

async function deleteScheduleSlots(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteScheduleSlot = await scheduledSlotsService.deleteScheduledSlots(id);
  res.send(deleteScheduleSlot);
}
