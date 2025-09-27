import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{ textAlign: "center", padding: "2rem", background: "#282c34", color: "white" }}>
        <h1>Adrin Paudel</h1>
        <p>BCT (Computer Engineering) Student | Tech Enthusiast</p>
      </header>

      {/* About Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate developer currently pursuing **BCT (Computer Engineering)** at Kathmandu Engineering College. I love building clean and
          responsive web applications, and I have a keen interest in **Distributed Systems** and **Data Mining**. This demo website is built
          with <strong>React + Vite</strong> and deployed on <strong>Vercel</strong>.
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Projects</h2>
        <ul>
          <li>🌐 Portfolio Website – A simple personal site template</li>
          <li>📱 **Galaxy S21 Ultra** App Demo – Task manager or utility app for Android</li>
          <li>💻 **Acer Predator Helios Neo 16** Config - Tool for managing system settings</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:paudeladrin@gmail.com">paudeladrin@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/paudeladrin" target="_blank">github.com/paudeladrin</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" target="_blank">linkedin.com/in/yourlinkedin</a></p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "1rem", background: "#f5f5f5" }}>
        <p>© 2025 Adrin Paudel | Built with React & Vite</p>
      </footer>
    </div>
  );
}
