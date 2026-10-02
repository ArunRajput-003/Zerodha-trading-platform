// const User = require("../Model/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcrypt");

// // =====================
// // SIGNUP
// // =====================


// module.exports.Signup = async (req, res) => {
//   try {
//     console.log("BODY:", req.body);

//     const { email, password, username } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(409).json({
//         message: "User already exists",
//       });
//     }

//     const user = await User.create({
//       email,
//       password,
//       username,
//     });

//     const token = createSecretToken(user._id);

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       path: "/",
//     });

//     return res.status(201).json({
//       message: "User signed up successfully",
//       success: true,
//       user,
//     });

//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };



// // =====================
// // LOGIN
// // =====================


// module.exports.Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if(!email || !password ){
//       return res.json({message:'All fields are required'})
//     }
//     const user = await User.findOne({ email });
//     if(!user){
//       return res.json({message:'Incorrect password or email' }) 
//     }
//     const auth = await bcrypt.compare(password,user.password)
//     if (!auth) {
//       return res.json({message:'Incorrect password or email' }) 
//     }
//      const token = createSecretToken(user._id);
//      res.cookie("token", token, {
//   httpOnly: true,
//   secure: false,
//   sameSite: "lax",
//   path: "/",
// });
//      res.status(200).json({ message: "User logged in successfully", success: true });
     
//   } catch (error) {
//     console.error(error);
//   }
// }

const User = require("../Model/UserModel");
const {
  createSecretToken,
} = require("../util/SecretToken");

const bcrypt = require("bcryptjs");

// =========================
// SIGNUP
// =========================

module.exports.Signup = async (req, res) => {
  try {
    console.log("Signup body:", req.body);

    const {
      email,
      password,
      username,
    } = req.body;

    if (
      !email ||
      !password ||
      !username
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Email, username and password are required",
      });
    }

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      email,
      password,
      username,
    });

    const token =
      createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return res.status(201).json({
      success: true,
      message:
        "User signed up successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(
      "Signup error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong during signup",
    });
  }
};

// =========================
// LOGIN
// =========================

module.exports.Login = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required",
      });
    }

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "Incorrect email or password",
      });
    }

    const auth =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!auth) {
      return res.status(401).json({
        success: false,
        message:
          "Incorrect email or password",
      });
    }

    const token =
      createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    console.log(
      "Login successful for:",
      user.email
    );

    return res.status(200).json({
      success: true,
      message:
        "User logged in successfully",
    });

  } catch (error) {
    console.error(
      "Login error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong during login",
    });
  }
};