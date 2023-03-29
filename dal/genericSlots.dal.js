const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createGenericSlot,
  getGenericSlots,
  getGenericSlotById,
  deleteGenericSlot,
  updateGenericSlot
};

function createGenericSlot(genericSlotData) {
  const { from , to , user_id , type } = genericSlotData;

  return prisma.generic_slots.create({
    data: {
      from: new Date(from),
      to: new Date(to),
      user_id: user_id,
      type: type
    }
  });
}

function getGenericSlots() {
  return prisma.generic_slots.findMany()
}

function getGenericSlotById(id) {
  return prisma.generic_slots.findUnique({
    where: { id }
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
      user_id: user_id,
      type: type
  }
});
}
