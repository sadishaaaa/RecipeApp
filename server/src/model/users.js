import connectdb from "../connect.js";

export const registerUser = async (data) => {
  try {
    const result = await connectdb.query(
      `
      INSERT INTO users (
        username,
        email,
        "password",
        ciy,
        contact_no
      ) VALUES ($1, $2, $3,$4,$5)
      RETURNING *`,
      [data.username, data.email, data.password, data.city, data.contact_no]
    );

    return result;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userDetails = async (data) => {
  try {
    const result = await connectdb.query(
      `
      INSERT INTO users (
        cover_photo,
        profile_photo,
        bio,
        social_links
      ) VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [data.cover_photo, data.profile_photo, data.bio, data.social_links]
    );

    return result;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
