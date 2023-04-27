const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createAttendee,
  getAttendees,
  getAttendeeById,
  deleteAttendee,
  updateAttendee
};

function createAttendee(attendeeData) {
  return prisma.attendees.create({
    data: { ...attendeeData }
  });
}

function getAttendees() {
  return prisma.attendees.findMany()
}

function getAttendeeById(id) {
  return prisma.attendees.findMany({
    where: { user_id: id },
    include: {
      meetings: {
        include: {
          scheduled_slots: true
        }
      }
    },
  })
}

function deleteAttendee(id) {
  return prisma.attendees.delete({
    where: { id },
  })
}

function updateAttendee(data) {
  return prisma.attendees.update(data);
}
