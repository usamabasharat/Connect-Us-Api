const userService = require("../dal/dao");
const userValidator = require("../validators/user.validator");

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};


async function createUser(req, res) {
  const reqBody = req.body;
  const { error } = userValidator.userCreateSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  const user = await userService.createUser(reqBody);
  res.send({ user });
}

async function getUsers(req, res) {
  let users = await userService.getUsers();
  res.send(users);
}

async function getUserById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let user = await userService.getUserById(id);
  if (!user) {
    return res.send({ message: "User does not exist" });
  }
  else res.send(user);
}

async function updateUser(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = userValidator.userUpdateSchema.validate({
    ...reqObject,
    id,
  });
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  let updateUser = await userService.updateUser({
    where: { id },
    data: {
      ...reqObject,
    },
  });
  res.send(updateUser);
}

async function deleteUser(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteUser = await userService.deleteUser(id);
  if(deleteUser) res.send({ message: "User has been deleted" });
}