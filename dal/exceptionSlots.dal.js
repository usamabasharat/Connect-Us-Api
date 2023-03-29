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
  return prisma.exception_slots.create({
    data: { ...exception_slotData }
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

function updateExceptionSlots(data, options) {
  return prisma.exception_slots.update(data, options);
}
