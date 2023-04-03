const userService = require("../dal/user.dal");
const userValidator = require("../validators/user.validator");

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
  loginUser
};


async function createUser(req, res) {
  const reqBody = req.body;
  delete reqBody.confirm_password;
  reqBody.salt = "salt";
  const { error } = userValidator.userSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  const user = await userService.createUser(reqBody);
  res.send({ user });
}

async function loginUser(req, res) {
  let {email, password} = req.body;
  let user = await userService.loginUser(email, password);
  console.log(user)
  res.send(user);
}

async function getUsers(req, res) {
  let users = await userService.getUsers();
  res.send(users);
}

async function getUserByEmail(req, res) {
  let { email } = req.params;
  let user = await userService.getUserByEmail(email);
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
    ...reqObject
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