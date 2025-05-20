import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function AdminNavigation() {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-black text-white  w-60 p-2   gap-y-3  min-h-[474px]  flex  flex-col ">
      <NavLink to="/userProfile"  className="flex gap-3"  >
        <img
          className="h-16 w-16 rounded-full"
          src={`http://localhost:9000/image/${user.image}`}
          alt="user image"
        />
        <div  className="mt-2">
          <p>{user?.userName?.toUpperCase()}</p>
          <p>{user?.role?.toUpperCase()}</p>
        </div>
      </NavLink>
      <NavLink to="course">Course Management </NavLink>
      <NavLink to="user">User Management </NavLink>
    </div>
  );
}

export default AdminNavigation;
