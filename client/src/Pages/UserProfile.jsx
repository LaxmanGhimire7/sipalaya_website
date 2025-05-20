import { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { HiLogout } from "react-icons/hi";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const { user, state, dispatch } = useContext(AuthContext);
  const [name, setName] = useState(user?.userName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div>
      <div className=" mt-10  flex shadow-2xl shadow-gray-700 gap-10 ml-72 w-[700px] p-5   ">
        <div className="">
          <img
            src={
              user?.image
                ? `http://localhost:9000/image/${user.image}`
                : "default-user.png" // image stored in /public
            }
            alt="user image"
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
        <div className="  p-2   w-96 space-y-5">
          <h1>Name: {user?.userName}</h1>
          <p>Email: {user?.email}</p>
          <div className="flex">
            <button
              onClick={() => {
                dispatch({ type: "LOGOUT" });
                navigate("/");
              }}
              className="bg-red-600  w-32  gap-x-2  justify-center  items-center  text-xl p-3 flex text-white"
            >
              Logout
              <HiLogout size={20} />
            </button>
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
              className="bg-green-600 w-32 justify-center  items-center p-3 ml-2   text-white text-xl gap-x-2  flex  "
            >
              Edit
              <BiEdit size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
