import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function Navigation() {
  const navigate = useNavigate();
  const { state, user, dispatch } = useContext(AuthContext);
  return (
    <div className="bg-blue-900 text-white p-5 flex  justify-between mt-18">
      <div>Explore</div>
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allCourses">All Courses</NavLink>
        <NavLink to="/aboutUS">About Us</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/UserProfile">User Profile</NavLink>

        {user?.role === "admin" && (
          <>
            <NavLink to="/dashboard">Admin Dashboard</NavLink>
            <NavLink to="/instructor-dashboard">Instructor Portal</NavLink>
            <NavLink to="/student-dashboard">Student Portal</NavLink>
          </>
        )}

        {user?.role === "instructor" && (
          <NavLink to="/instructor-dashboard">Instructor Portal</NavLink>
        )}

        {user?.role === "student" && (
          <NavLink to="/student-dashboard">Student Portal</NavLink>
        )}
      </div>

      <div className="mr-9 cursor-pointer">
        <FaCartShopping size={20} />
      </div>
    </div>
  );
}

export default Navigation;
