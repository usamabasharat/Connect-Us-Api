const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};

function createUser(userData) {
  return prisma.users.create({
    data: { ...userData }
  });
}


function getUsers() {
  return prisma.users.findMany()
}

function getUserById(id) {
  return prisma.users.findUnique({
    where: { id }
  })
}

function deleteUser(id) {
  return prisma.users.delete({
    where: { id },
  })
}

function updateUser(data, options) {
  return prisma.users.update(data, options);
}

