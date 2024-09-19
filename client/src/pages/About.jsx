import React from 'react';
export const About = () =>{
    return (
        <>
            <main className="main">
        <section className="about-hero">
          <h1>About Us</h1>
          <p>Welcome to our about page!</p>
        </section>
        <section className="about-content">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <h2>Our Team</h2>
          <ul>
            <li>
              <img src="https://via.placeholder.com/50" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </li>
            <li>
              <img src="https://via.placeholder.com/50" alt="Team Member 2" />
              <h3>Jane Doe</h3>
              <p>CTO</p>
            </li>
          </ul>
        </section>
      </main>
        </>
    )

}