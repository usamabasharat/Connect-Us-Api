const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const CONST = require("../const");

module.exports = {
  createGenericSlot,
  getGenericSlots,
  getGenericSlotById,
  deleteGenericSlot,
  updateGenericSlot
};

async function createGenericSlot(genericSlotData) {
  const { from , to , user_id , type } = genericSlotData;
  const existingSlot = await prisma.generic_slots.findUnique({
    where: { type },
  });
  if (existingSlot) {
    // Generic Slot with this weekday already exists
    return CONST.WEEK_DAY_USED;
  }
  return prisma.generic_slots.create({
    data: {
      from: new Date(from),
      to: new Date(to),
      user_id,
      type,
    }
  });
}

function getGenericSlots() {
  return prisma.generic_slots.findMany()
}

function getGenericSlotById(user_id) {
  return prisma.generic_slots.findMany({
    where: { user_id }
  })
}

function deleteGenericSlot(id) {
  return prisma.generic_slots.delete({
    where: { id },
  })
}

function updateGenericSlot(genericSlotData) {
  const {from , to , user_id , type } = genericSlotData.data;
  return prisma.generic_slots.update({
    where: genericSlotData.where,
    data : {
      from: new Date(from),
      to: new Date(to),
      user_id,
      type
  }
});
}
