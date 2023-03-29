const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createExceptionSlots,
  getExceptionSlots,
  getExceptionSlotsById,
  deleteExceptionSlots,
  updateExceptionSlots
};

function createExceptionSlots(exception_slotData) {
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

function getExceptionSlotsById(id) {
  return prisma.exception_slots.findUnique({
    where: { id }
  })
}

function deleteExceptionSlots(id) {
  return prisma.exception_slots.delete({
    where: { id },
  })
}

function updateExceptionSlots(data) {
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
