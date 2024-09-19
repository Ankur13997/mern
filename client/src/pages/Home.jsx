import React from 'react';
import "../assets/css/home.css"
import { NavLink } from 'react-router-dom';

export const Home = () =>{
    return (
        <>
              <main className="main">
        <section className="hero">
          <h1>Welcome to our website!</h1>
          <p>This is a sample website built with React.</p>
          <NavLink to="/about" className="learn-more">Learn More</NavLink>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>
              <i className="fas fa-lock"></i>
              <p>Secure</p>
            </li>
            <li>
              <i className="fas fa-rocket"></i>
              <p>Fast</p>
            </li>
            <li>
              <i className="fas fa-cog"></i>
              <p>Easy to use</p>
            </li>
          </ul>
        </section>
      </main>
        </>
    )
}