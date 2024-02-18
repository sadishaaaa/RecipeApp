import React, { useEffect, useState } from "react";
import { getProfile } from "../../services/authService";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const profile = async () => {
    const data = await getProfile();
    setUser(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    profile();
  }, []);
  return (
    <div>
      <h1>User Profile</h1>

      <p>{user.username}</p>
      <img src={user.cover_photo} alt="" />
      <img src={user.profile_photo} alt="" />
      <p>email:{user.email}</p>
      <p>contact No:{user.contact_no}</p>
      <p>city:{user.city}</p>
      <p>Bio:{user.bio}</p>
      <p>Insagram:{user.instagram_link}</p>
      <p>Tiktok:{user.tiktok_link}</p>
      <p>Additional:{user.additional_link}</p>
      <p>Youtube:{user.youtube_link}</p>
      <p></p>
    </div>
  );
};

export default UserProfile;
