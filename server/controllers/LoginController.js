const bcryptjs = require("bcryptjs");
const User = require("../model/UserScheme");

const loginController =async (req, res) => {

    let token;

  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "Required field are missing" });
  }

  User.findOne({ email },async  (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
      await bcryptjs
        .compare(password, user.password)
        .then(async (password)  => {
          if (password) {
            res.send({ message: "user successfully login", data: user });
            

          } else {
            res.send({ error: "Invalid User" });
          }
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.json({ error: "Invalid User" });
    }
  });
};

module.exports = loginController; 