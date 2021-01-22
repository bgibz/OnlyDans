const jwt = require("jsonwebtoken");
const jwtSecret = "MySecret2021";

function authUser(username, password) {
  if (username == "zapzap" && password == "sparky") {
    return true;
  }
  return false;
}

export default (req, res) => {
  if (req.method === "POST") {
    //login
    if (!req.body.username || !req.body.password) {
      res
        .status(403)
        .json({ error: true, message: "Please fill out all required fields" });
    }
    const username = req.body.username;
    const password = req.body.password;
    let result = authUser(username, password);
    if (result) {
      const token = jwt.sign(
        { userID: "001", userName: "zapzap", msg: "Access Granted" },
        jwtSecret,
        {
          expiresIn: 7200 // 2hrs
        }
      );
      res.status(200).json({ token });
      return;
    } else {
      res.status(401).json({ error: true, message: "Authorization Failed" });
    }
  } else {
    res.statusCode = 401;
    res.end();
  }
};
