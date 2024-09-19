import React, { useState } from "react";
import "../assets/css/auth.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        const res_data= await response.json();
        console.log(res_data);
        setUser({
          
          email: "",
         
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
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
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
              Login Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
