import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{ textAlign: "center", padding: "2rem", background: "#282c34", color: "white" }}>
        <h1>John Doe</h1>
        <p>Frontend Developer | Tech Enthusiast</p>
      </header>

      {/* About Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate developer who loves building clean and
          responsive web applications. This is a demo personal website built
          with <strong>React + Vite</strong> and deployed on <strong>Vercel</strong>.
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Projects</h2>
        <ul>
          <li>🌐 Portfolio Website – A simple personal site template</li>
          <li>📱 Todo App – Task manager with React</li>
          <li>⚡ Weather App – Real-time weather updates</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:example@email.com">example@email.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "1rem", background: "#f5f5f5" }}>
        <p>© 2025 John Doe | Built with React & Vite</p>
      </footer>
    </div>
  );
}
