const userService = require("../dal/dao");

async function createUser(req, res) {
  const reqBody = req.body;
  console.log(reqBody);
  const user = await userService.addOne(reqBody);
  res.send({ user });
}

module.exports = {
  createUser,
};
