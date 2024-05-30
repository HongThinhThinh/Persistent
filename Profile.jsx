import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./src/redux/features/counterSlice";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>{user.userName}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.abc}</h1>
    </div>
  );
}

export default Profile;
