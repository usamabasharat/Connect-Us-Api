const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserByEmail,
  updateUser,
  deleteUser
};

async function createUser(userData) {
  console.log(userData)
  const {email} = userData;
  const existingUser = await prisma.users.findUnique({
    where: { email },
  });
  if (existingUser) {
    // User with this email already exists
    return "Email Already in Use";
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
  if (!user) return "Email does not exist"
  else {
    if (user.password === password) return user;
    else return "Password does not match"
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
