import React from 'react';
import shashankImage from '../assets/shashank.png'; // 

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <img 
        src={shashankImage}
        alt="Shashank Profile"
        style={styles.image}
      />
      <p style={styles.text}>
        Hello! 👋 I am <strong>Sai Shashank Reddy</strong>, a passionate Computer Science student focused on learning and building practical projects that solve real-world problems. I enjoy working with React, JavaScript, HTML, CSS, and exploring machine learning and modern frontend technologies.
      </p>
      <p style={styles.text}>
        I am dedicated to continuously expanding my knowledge while creating clean, functional, and visually appealing user interfaces.
      </p>
      <p style={styles.text}>
        <strong>Skills:</strong> React, JavaScript, HTML, CSS, Git, Python, Java
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#ffffff',
    margin: '1rem auto',
    maxWidth: '800px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  heading: {
    color: '#4a90e2',
    marginBottom: '1rem',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    margin: '1rem 0',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  text: {
    color: '#555',
    lineHeight: '1.6',
    margin: '0.5rem 0',
    fontSize: '1rem',
  }
};

export default About;
