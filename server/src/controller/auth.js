import config from "../config.js";
import connectdb from "../connect.js";
import * as Users from "../model/auth.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    console.log(data.password);
    const result = await Users.registerUser({
      username: data.username,
      email: data.email,
      password: data.password,
      cover_photo: data.coverPhoto,
      profile_photo: data.profilePhoto,
      contact_no: data.contactNo,
      city: data.city,
      bio: data.bio,
      instagram_link: data.instagram,
      tiktok_link: data.tiktok,
      youtube_link: data.youtube,
      additional_link: data.additional,
    });

    console.log(result);
    res.status(201).json({
      success: true,
      message: "Registered successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.getUserByUserName(username);
    if (!user) {
      console.log("Invalid Username");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("Invalid password");
    }
    res.json({
      success: true,
      message: "login successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = (req, res) => {};