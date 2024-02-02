import connectdb from "../connect.js";

export const registerUser = async (data) => {
  try {
    const result = await connectdb.query(
      `
      INSERT INTO users (
        username,
        email,
        "password"
      ) VALUES ($1, $2, $3)
      RETURNING *`,
      [data.username, data.email, data.password]
    );

    return result;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
