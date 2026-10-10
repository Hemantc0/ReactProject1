import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { username } = useContext(UserContext);

  return (
    <div className="page">
      <h1>Profile Page</h1>

      <h3>User Name: {username}</h3>
    </div>
  );
}

export default Profile;