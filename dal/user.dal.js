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
  const users = await getUsers();
  const allUsers = JSON.stringify(users);
  if(allUsers) {
    const userExists = allUsers.some(user => user.email === userData.email)}
  if(userExists) return "User Email already Exist";
  else {
    try {
      return prisma.users.create({
        data: { ...userData }
      });
    } catch(err){
      if (err.code === 'P2002' && err.meta.target.includes('email')) {
        return new Error('Email already exists')
      }
      return err
    }
  }
}

async function loginUser(email, password) {
  const user = await prisma.users.findUnique({
    where: { email }
  })
  console.log(user)
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
