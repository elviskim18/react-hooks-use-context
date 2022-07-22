//import useContext hook
import React, {useContext} from "react";
import Interests from "./Interests";

//GET UserContext we created
import {UserContext} from "../context/user"

function Profile({theme }) {
  //call useCOntext with our UserContext
  const user = useContext(UserContext)
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
