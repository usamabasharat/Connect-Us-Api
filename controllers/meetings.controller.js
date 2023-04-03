const meetingService = require("../dal/meetings.dal")
const meetingValidator = require("../validators/meetings.validator");
const CONST = require("../const");

module.exports = {
  createMeeting,
  getMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
};

async function createMeeting(req, res) {
  const reqBody = req.body;
  const { error } = meetingValidator.scheduleSlotSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const meeting = await meetingService.createMeeting(reqBody);
  res.send({ meeting });
}

async function getMeetings(req, res) {
  let meetings = await meetingService.getMeetings();
  res.send(meetings);
}

async function getMeetingById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let meeting = await meetingService.getMeetingById(id);
  if (!meeting) {
    return res.send({ message: `${CONST.NO_MEETING}` });
  }
  else res.send(meeting);
}

async function updateMeeting(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = meetingValidator.scheduleSlotSchema.validate(reqObject);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateMeeting = await meetingService.updateMeeting({
    where: { id },
    data: reqObject,
  });
  res.send(updateMeeting);
}

async function deleteMeeting(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteMeeting = await meetingService.deleteMeeting(id);
  res.send(deleteMeeting);
}
