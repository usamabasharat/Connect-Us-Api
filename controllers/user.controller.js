const userService = require("../dal/user.dal");
const userValidator = require("../validators/user.validator");
const CONST = require("../const");

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};


async function createUser(req, res) {
  const reqBody = req.body;
  const { error } = userValidator.userSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const user = await userService.createUser(reqBody);
  res.send({ user });
}

async function getUsers(req, res) {
  let users = await userService.getUsers();
  console.log(users);
  res.send(users);
}

async function getUserById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let user = await userService.getUserById(id);
  if (!user) {
    return res.send({ message: `${CONST.NO_USER}` });
  }
  else res.send(user);
}

async function updateUser(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = userValidator.userUpdateSchema.validate(reqObject);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateUser = await userService.updateUser({
    where: { id },
    data: reqObject,
  });
  res.send(updateUser);
}

async function deleteUser(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteUser = await userService.deleteUser(id);
  if(deleteUser) res.send({ message: `${CONST.USER_DELETED}` });
}
