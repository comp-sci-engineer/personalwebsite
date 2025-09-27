import React from "react";

export default function App() {
  const mainBackgroundColor = "#1e1e1e"; // Dark background
  const mainTextColor = "#f0f0f0";    // Light text
  const accentColor = "#00bcd4";      // Cyan accent

  const sectionStyle = {
    padding: "2.5rem",
    maxWidth: "900px",
    margin: "1rem auto",
    background: "#282828", // Slightly lighter dark background for sections
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Distinct shadow
  };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", lineHeight: 1.8, background: mainBackgroundColor, color: mainTextColor, textAlign: "center", paddingBottom: "2rem" }}>
      {/* Header */}
      <header style={{ padding: "3rem", background: "#000000", borderBottom: `3px solid ${accentColor}` }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>John Doe</h1>
        <p style={{ color: accentColor, letterSpacing: "2px", textTransform: "uppercase" }}>Frontend Developer | Tech Enthusiast</p>
      </header>

      {/* About Section */}
      <section style={sectionStyle}>
        <h2 style={{ color: accentColor, borderBottom: "2px solid #333", paddingBottom: "0.5rem", marginBottom: "1rem" }}>About Me</h2>
        <p style={{ textAlign: "left" }}>
          Hello! I'm a passionate developer who loves building clean and
          responsive web applications. I focus on creating modern, high-performance
          user interfaces using the latest technologies. This is a demo personal website built
          with <strong>React + Vite</strong> and deployed on <strong>Vercel</strong>.
        </p>
      </section>

      {/* Projects Section */}
      <section style={sectionStyle}>
        <h2 style={{ color: accentColor, borderBottom: "2px solid #333", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Projects</h2>
        <ul style={{ listStyleType: "square", paddingLeft: "20px", textAlign: "left" }}>
          <li style={{ marginBottom: "0.5rem" }}>🌐 Portfolio Website – A simple personal site template focusing on modern design.</li>
          <li style={{ marginBottom: "0.5rem" }}>📱 Todo App – A comprehensive task manager built with React hooks and local storage.</li>
          <li style={{ marginBottom: "0.5rem" }}>⚡ Weather App – Real-time weather updates using a public API and asynchronous programming.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={sectionStyle}>
        <h2 style={{ color: accentColor, borderBottom: "2px solid #333", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Contact</h2>
        <p>Email: <a href="mailto:example@email.com" style={{ color: accentColor }}>example@email.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" style={{ color: accentColor }}>github.com/yourusername</a></p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "1.5rem", background: accentColor, color: "#000", marginTop: "2rem" }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>© 2025 John Doe | Built with React & Vite</p>
      </footer>
    </div>
  );
}
