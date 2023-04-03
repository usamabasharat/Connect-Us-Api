const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createExceptionSlot,
  getExceptionSlots,
  getExceptionSlotById,
  deleteExceptionSlot,
  updateExceptionSlot
};

function createExceptionSlot(exception_slotData) {
  const { from , to , user_id } = exception_slotData;
  return prisma.exception_slots.create({
    data: {
      from: new Date(from),
      to: new Date(to),
      user_id: user_id
    }
  });
}

function getExceptionSlots() {
  return prisma.exception_slots.findMany()
}

function getExceptionSlotById(id) {
  return prisma.exception_slots.findUnique({
    where: { id }
  })
}

function deleteExceptionSlot(id) {
  return prisma.exception_slots.delete({
    where: { id },
  })
}

function updateExceptionSlot(data) {
  const { from , to , user_id } = data.data;
  const updatedData = {
    where: data.where,
    data:{
    from: new Date(from),
    to: new Date(to),
    user_id: user_id
  }}
  return prisma.exception_slots.update(updatedData);
}
