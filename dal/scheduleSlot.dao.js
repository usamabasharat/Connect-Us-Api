const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createScheduleSlots,
  getScheduledSlots,
  getScheduledSlotsById,
  deleteScheduledSlots,
  updateScheduledSlots
};

function createScheduleSlots(scheduled_slotData) {
  const { from , to , user_id , meeting_id, type } = scheduled_slotData;
  
  return prisma.scheduled_slots.create({
    data: {
      from: new Date(from),
      to: new Date(to),
      user_id: user_id,
      meeting_id: meeting_id,
      type: type
    }
  });
}

function getScheduledSlots() {
  return prisma.scheduled_slots.findMany()
}

function getScheduledSlotsById(id) {
  return prisma.scheduled_slots.findUnique({
    where: { id }
  })
}

function deleteScheduledSlots(id) {
  return prisma.scheduled_slots.delete({
    where: { id },
  })
}

function updateScheduledSlots(data) {
  const { from , to , user_id , meeting_id, type } = data.data;

  return prisma.scheduled_slots.update({
    where: data.where,
    data:{
    from: new Date(from),
    to: new Date(to),
    user_id: user_id,
    meeting_id: meeting_id,
    type: type
  }});
}
