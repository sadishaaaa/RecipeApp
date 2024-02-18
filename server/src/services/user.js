import * as Users from "../model/auth.js";
export const getUserById = async (user_id) => {
  const data = await Users.getUserById(user_id);
  if (!data) {
    throw new Error(`User with id : ${user_id} not found`);
  }
  return data;
};
