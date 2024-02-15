import config from "../config.js";
import connectdb from "../connect.js";
import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
} from "../constant/constant.js";
import * as Users from "../model/auth.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const data = req.body;
  console.log(data);
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
  return {
    message: "user signed up sucessfully",
  };
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.getUserByUserName(username);
  if (!user) {
    console.log("Invalid Username");
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    console.log("Invalid password");
  }
  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
  return {
    accessToken,
    refreshToken,
    user,
  };
};
