import config from "../config.js";
import connectdb from "../connect.js";
import * as Users from "../model/users.js";
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

export const login = (req, res) => {};

export const logout = (req, res) => {};
