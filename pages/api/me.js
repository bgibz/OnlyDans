const jwt = require("jsonwebtoken");
const jwtSecret = "MySecret2021";

export default (req, res) => {
  console.log("Auth/me");
  if (req.method === "GET") {
    if (!("token" in req.cookies)) {
      res.status(401).json({ message: "Unable to auth" });
      return;
    }
    let decoded;
    const token = req.cookies.token;
    if (token) {
      try {
        decoded = jwt.verify(token, jwtSecret);
      } catch (e) {
        console.error(e);
      }
    }
    if (decoded) {
      console.log("success?");
      res.json(decoded);
      return;
    } else {
      res.status(401).json({ message: "Unable to auth" });
    }
  }
};
