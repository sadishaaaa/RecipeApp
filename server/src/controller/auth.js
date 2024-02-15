import * as authService from "../services/auth.js";

export const register = async (req, res) => {
  try {
    const data = req.body;
    await authService.register(data);
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authService.login(username);
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const logout = (req, res) => {};
