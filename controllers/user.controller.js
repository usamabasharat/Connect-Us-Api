const userService = require("../dal/dao");
const userValidator = require("../validators/user.validator");

async function createUser(req, res) {
  const reqBody = req.body;
  const { error } = userValidator.userSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  const user = await userService.addOne(reqBody);
  res.send({ user });
}

module.exports = {
  createUser,
};
