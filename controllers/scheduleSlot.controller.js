const scheduledSlotsService = require("../dal/scheduleSlot.dao")
const schedhuledSlotsValidator = require("../validators/scheduledSlot.validator");

module.exports = {
  createScheduleSlots,
  getScheduledSlots,
  getScheduledSlotsById,
  updateScheduledSlots,
  deleteScheduleSlots,
};

async function createScheduleSlots(req, res) {
  const reqBody = req.body;
  const { error } = schedhuledSlotsValidator.scheduleSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
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
    return res.send({ message: "Scheduled Slot does not exist" });
  }
  else res.send(scheduleSlot);
}

async function updateScheduledSlots(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = schedhuledSlotsValidator.scheduleSlotSchema.validate({
    ...reqObject,
  });
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  let updateScheduleSlot = await scheduledSlotsService.updateSchdeuledSlots({
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
