import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

function UserManagement() {
  const { state } = useContext(AuthContext);
  const [allUser, setAllUser] = useState([]);

  const getAllUser = async () => {
    try {
      let response = await fetch("http://localhost:9000/api/auth/getAllUser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllUser(data.user);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Internal Users</h1>
      {allUser.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Access Level</th>
                <th className="py-3 px-4">Date Added</th>
                <th className="py-3 px-4">Last Login</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-200 text-blue-700 font-bold rounded-full flex items-center justify-center">
                      {user.firstName?.[0]}
                      {user.lastName?.[0]}
                    </div>
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                  </td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {user.role || "User"}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default UserManagement;
