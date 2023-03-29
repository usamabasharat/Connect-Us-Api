const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createMeeting,
  getMeetings,
  getMeetingById,
  deleteMeeting,
  updateMeeting
};

function createMeeting(meetingData) {
  return prisma.meetings.create({
    data: { ...meetingData }
  });
}

function getMeetings() {
  return prisma.meetings.findMany()
}

function getMeetingById(id) {
  return prisma.meetings.findUnique({
    where: { id }
  })
}

function deleteMeeting(id) {
  return prisma.meetings.delete({
    where: { id },
  })
}

function updateMeeting(data, options) {
  return prisma.meetings.update(data, options);
}
