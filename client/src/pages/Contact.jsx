import React, { useState } from "react";
import "../assets/css/auth.css";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  return (
    <>
      <div className="register-container">
        <div className="register-illustration">
          <img src="illustration.png" alt="Illustration" />
        </div>
        <div className="register-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={contact.username}
                onChange={handleinput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleinput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                cols={34}
                rows={10}
                value={contact.message}
                onChange={handleinput}
              />
            </div>
            <button type="submit" className="register-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
