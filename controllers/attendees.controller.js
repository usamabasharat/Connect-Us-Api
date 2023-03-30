const attendeesService = require('../dal/attendees.dal');
const attendeesValidator = require('../validators/attendees.validator');

module.exports = {
  createAttendees,
  getAttendees,
  getAttendeesById,
  updateAttendees,
  deleteAttendees,
};

async function createAttendees(req, res) {
  const reqBody = req.body;
  const { error } = attendeesValidator.attendeesSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: 'Invalid Body', error });
  }
  const attendees = await attendeesService.createAttendees(reqBody);
  res.send({ attendees });
}

async function getAttendees(req, res) {
  let attendees = await attendeesService.getAttendees();
  res.send(attendees);
}

async function getAttendeesById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let attendees = await attendeesService.getAttendeesById(id);
  if (!attendees) {
    return res.send({ message: 'Attendee does not exist' });
  } else res.send(attendees);
}

async function updateAttendees(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = attendeesValidator.attendeesSchema.validate({
    ...reqObject,
  });
  if (error !== undefined) {
    return res.send({ message: 'Invalid Body', error });
  }
  let updateAttendees = await attendeesService.updateAttendee({
    where: { id },
    data: {
      ...reqObject,
    },
  });
  res.send(updateAttendees);
}

async function deleteAttendees(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteAttendees = await attendeesService.deleteAttendee(id);
  res.send(deleteAttendees);
}
