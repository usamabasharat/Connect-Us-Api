const attendeesService = require('../dal/attendees.dal');
const attendeesValidator = require('../validators/attendees.validator');
const CONST = require("../const");

module.exports = {
  createAttendee,
  getAttendees,
  getAttendeeById,
  updateAttendee,
  deleteAttendee,
};

async function createAttendee(req, res , args) {
  const { user_id, meeting_id ,type} = args;
  const { error } = attendeesValidator.attendeesSchema.validate({ user_id, meeting_id ,type});
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}` , error });
  }
  const attendees = await attendeesService.createAttendee({ user_id, meeting_id ,type});
  console.log(attendees);
}

async function getAttendees(req, res) {
  let attendees = await attendeesService.getAttendees();
  res.send(attendees);
}

async function getAttendeeById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let attendees = await attendeesService.getAttendeeById(id);
  if (!attendees) {
    return res.send({ message: `${CONST.NO_ATTENDEES}` });
  } else res.send(attendees);
}

async function updateAttendee(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = attendeesValidator.attendeesSchema.validate(reqObject);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateAttendee = await attendeesService.updateAttendee({
    where: { id },
    data:reqObject,
  });
  res.send(updateAttendee);
}

async function deleteAttendee(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteAttendee = await attendeesService.deleteAttendee(id);
  res.send(deleteAttendee);
}
