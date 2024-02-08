import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

const Profil = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}</div>;
};

export default Profil;
