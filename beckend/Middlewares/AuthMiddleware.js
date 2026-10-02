// const User = require("../Model/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }

const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    console.log(
      "Token received:",
      token ? "YES" : "NO"
    );

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Authentication token missing",
      });
    }

    jwt.verify(
      token,
      process.env.TOKEN_KEY,
      async (err, data) => {
        if (err) {
          console.error(
            "JWT verification failed:",
            err.message
          );

          return res.status(401).json({
            status: false,
            message: "Invalid or expired token",
          });
        }

        try {
          const user = await User.findById(data.id);

          if (!user) {
            return res.status(401).json({
              status: false,
              message: "User not found",
            });
          }

          return res.status(200).json({
            status: true,
            user: user.username,
          });

        } catch (error) {
          console.error(
            "User lookup error:",
            error
          );

          return res.status(500).json({
            status: false,
            message: "Failed to verify user",
          });
        }
      }
    );

  } catch (error) {
    console.error(
      "Authentication middleware error:",
      error
    );

    return res.status(500).json({
      status: false,
      message: "Authentication failed",
    });
  }
};