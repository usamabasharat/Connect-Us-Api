const meetingService = require("../dal/meetings.dal")
const meetingValidator = require("../validators/meetings.validator");
const CONST = require("../const");
const { createScheduleSlots, getScheduledSlotsById } = require("./scheduleSlot.controller");
const { createAttendee } = require("./attendees.controller");

module.exports = {
  createMeeting,
  getMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
};

async function createMeeting(req, res) {
  const reqBody = req.body;
  console.log(reqBody);
  const {title, description, attachments, url, type} = reqBody 
  const { error } = meetingValidator.meetingSchema.validate({title, description, attachments, url, type});
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const meeting = await meetingService.createMeeting({title, description, attachments, url, type});
  reqBody.meeting_id = meeting.id
  if(meeting.id){
    createScheduleSlots(req, res, reqBody);
    reqBody.attendees.forEach(attendee => {
      if(attendee  === reqBody.user_id){
        reqBody.type = 'host';
        createAttendee(req, res, reqBody);
      }
      else {
        reqBody.user_id = attendee;
        reqBody.type = 'participant';
        createAttendee(req, res, reqBody);
      }
    });
  }
  res.send({ message: `${CONST.MEETING_CREATED}` });
}

async function getMeetings(req, res) {
  let meetings = await meetingService.getMeetings();
  res.send(meetings);
}

async function getMeetingById(req, res) {
  let { id } = req.params;
  userId = Number(id);
  const scheduledSlot = await getScheduledSlotsById(userId, res);
  res.send(scheduledSlot);
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
