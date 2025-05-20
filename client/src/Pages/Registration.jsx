import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterForm = () => {
 const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    resetForm();

    try {
      let response = await fetch ("http://localhost:9000/api/auth/register", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          firstName, lastName, userName, email, phone, password
        }),
      });

      if(!response.ok){
        alert("Error")
      }
      response = await response.json();
      console.log(response)
      alert(response.msg);
      navigate('/students-login')
    } catch (error) {
      alert ("Error:" + error.message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-2">Register</h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Kindly fill in this form to register.
        </p>

        <form onSubmit={formSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter first name"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter last name"
              required
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter username"
              required
              value={userName}
              onChange={(e)=>{
                setUserName(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={(e)=>{
                setPhone(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Repeat password"
              required
              value={confirmPassword}
              onChange={(e)=>{
                setConfirmPassword(e.target.value)
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <NavLink to="/students-login">
              <button>Go to Login</button>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
