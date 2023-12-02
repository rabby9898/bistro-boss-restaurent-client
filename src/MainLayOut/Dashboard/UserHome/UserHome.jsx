import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-3xl">
        Hi , Welcome
        <span>{user?.displayName ? user?.displayName : "Back"}</span>
      </h1>
    </div>
  );
};

export default UserHome;
