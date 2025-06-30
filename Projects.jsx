import React from 'react';

function Projects() {
  const projectList = [
    { name: "Deepfake Detection", desc: "Detects fake images using CNN.", link: "https://github.com/shashank263/DeepFake-Detection-Using-CNN" },
    { name: "grammer-correction", desc: "Live rate currency converter using API.", link: "https://github.com/shashank263/grammer-correction" }
  ];

  return (
    <section id="projects" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem', borderRadius: '8px' }}>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
