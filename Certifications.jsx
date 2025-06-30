import React from 'react';

function Certifications() {
  const certs = [
    "Skill India Python Certification - Reliance Foundation",
    "Skill India Frontend Certification - Reliance Foundation"
  ];

  return (
    <section id="certifications" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Certifications</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {certs.map((cert, idx) => (
          <li key={idx} style={{ margin: '0.5rem 0' }}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
