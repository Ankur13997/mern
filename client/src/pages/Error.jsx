import React from 'react';
import "../assets/css/error.css"
import { NavLink } from 'react-router-dom';
export const Error = () => {
    return (
        <div className="error-page">
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Page Not Found</h2>
          <p className="error-description">
            Sorry, the page you are looking for does not exist.
          </p>
          <NavLink to="/" className="back-button">Back to Home</NavLink>
        </div>
      );
  };