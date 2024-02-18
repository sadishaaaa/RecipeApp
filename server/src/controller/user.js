import * as userService from "../services/user.js";
export const checktoken = async (req, res, next) => {
  try {
    console.log("controller", req.user);
    const id = req?.user?.user_id;
    const data = await userService.getUserById(id);
    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};
