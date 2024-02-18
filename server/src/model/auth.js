import connectdb from "../connect.js";

export const registerUser = async (data) => {
  try {
    console.log(data);
    const result = await connectdb.query(
      `
      INSERT INTO users (
        username,
        email,
        "password",
       contact_no,
       cover_photo,
       profile_photo,
       city,
       bio,
       instagram_link,
       tiktok_link,
       youtube_link,
       additional_link

      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *`,
      [
        data.username,
        data.email,
        data.password,
        data.contact_no,
        data.cover_photo,
        data.profile_photo,
        data.city,
        data.bio,
        data.instagram_link,
        data.tiktok_link,
        data.youtube_link,
        data.additional_link,
      ]
    );

    return result;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserByUserName = async (username) => {
  try {
    const result = await connectdb.query(
      `SELECT * FROM users WHERE username= $1`,
      [username]
    );
    return result.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};
export const getUserById = async (user_id) => {
  try {
    const result = await connectdb.query(
      `SELECT * FROM users WHERE user_id= $1`,
      [user_id]
    );
    return result.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};
