const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const CONST = require("../const");


module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
  updatePassword,
};

async function createUser(userData) {
  console.log(userData)
  const { email } = userData;
  const existingUser = await prisma.users.findUnique({
    where: { email },
  });
  if (existingUser) {
    // User with this email already exists
    return CONST.EMAIL_EXISTS;
  }

  const newUser = await prisma.users.create({
    data: { ...userData },
  });

  return newUser;
}

async function loginUser(email, password) {
  const user = await prisma.users.findUnique({
    where: { email }
  })
  if (!user) return CONST.EMAIL_DOES_NOT_EXIST;
  else {
    if (user.password === password) return user;
    else return CONST.PASSWORD_DOES_NOT_MATCH
  }
}

async function updatePassword(email, newPassword) {
  const user = await prisma.users.findUnique({
    where: { email }
  })
  if (!user) return CONST.EMAIL_DOES_NOT_EXIST;
  else {
    const updatedUser = await prisma.users.update({
      where: { email },
      data: { password: newPassword },
    })
    return updatedUser;
  }
}

function getUsers() {
  return prisma.users.findMany()
}

function getUserByEmail(email) {
  return prisma.users.findUnique({
    where: { email }
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
