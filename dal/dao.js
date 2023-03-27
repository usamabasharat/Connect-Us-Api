const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function addOne(userData) {
  return prisma.users.create({
    data: {...userData} 
  });
}

module.exports = {
  addOne,
};
