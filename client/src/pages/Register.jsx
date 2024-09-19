import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/auth.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("Register".error);
    }
  };
  return (
    <>
      <div className="register-container">
        <div className="register-illustration">
          <img src="illustration.png" alt="Illustration" />
        </div>
        <div className="register-form">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleinput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleinput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleinput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleinput}
              />
            </div>
            <button type="submit" className="register-btn">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
