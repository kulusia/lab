import React from 'react';

// --- User Data: Updated to include Java, C++, and DBMS ---
const userData = {
  name: "Kulusia",
  title: "Full Stack & Systems Developer | AI & Data Specialist",
  tagline: "Pioneering EdTech solutions for secondary schools using Machine Learning.",
  bio: "I am Kulusia, a dedicated Full Stack Developer specializing in scalable full-stack applications built with modern tools like React, Python, and Firebase. My core focus is on applying Machine Learning and system programming (C++/Java) skills, alongside Database Management, to create innovative and impactful solutions. My current research targets enhancing learning environments and student engagement in secondary education.",
  skills: [
    "Java", 
    "C++", 
    "Database Management Systems (SQL/Postgrey)", 
    "React.js", 
    "Python (Flask/Django)", 
    "Machine Learning", 
    "Voice Biometrics (Vosk API)", 
    "Machine Learning", 
    "Custom CSS", 
    "Scalable Systems", 
    "Education Technology Development"
  ],
  socials: {
    github: "#", // Replace with your GitHub URL
    linkedin: "#", // Replace with your LinkedIn URL
  },
  ctaText: "Explore My Projects",
  ctaLink: "#projects", 
};

// --- Projects Data (Logically Reordered) ---
const projectData = [
  // 1. Systems/Core focus (New Project highlighting C++/Java/DBMS)
  {
    id: 4, 
    title: "High-Performance Data Processing API",
    description: "Developed a robust, low-latency API backend using **C++** for core data processing logic and **Java (Spring Boot)** for the service layer. Data persistence and complex querying managed via a highly optimized SQL database structure, demonstrating strong systems programming and DBMS expertise.",
    technologies: ["C++", "Java (Spring Boot)", "PostgreSQL/SQL", "REST API", "Low-Latency Systems", "DBMS"],
    githubUrl: "#", 
    liveUrl: "#", 
    icon: (props) => <ServerIcon {...props} />, 
    colorClass: "purple", 
  },
  // 2. Specialized AI focus (Original #1)
  {
    id: 1,
    title: "EdTech Voice Biometrics System (The Secondary School Project)",
    description: "Developed a comprehensive platform for secondary schools leveraging **Vosk API** and Machine Learning to implement voice-based authentication and engagement tracking. This project aims to enhance security, personalize learning paths, and provide actionable insights into student participation.",
    technologies: ["Python", "Flask/Django", "React", "Vosk API", "Firebase", "Machine Learning"],
    githubUrl: "#", 
    liveUrl: "#", 
    icon: (props) => <MicIcon {...props} />,
    colorClass: "red", 
  },
  // 3. Full Stack focus (Original #2)
  {
    id: 2,
    title: "Scalable Full Stack Chat Application",
    description: "A real-time, responsive chat application built for high concurrency. Utilizes Firestore for real-time data synchronization and React hooks for dynamic state management, demonstrating robust full-stack architecture skills.",
    technologies: ["React.js", "Firebase", "Firestore", "Custom CSS", "Real-Time DB"],
    githubUrl: "#", 
    liveUrl: "#", 
    icon: (props) => <MessageIcon {...props} />,
    colorClass: "green", 
  },
  // 4. Data/Analysis focus (Original #3)
  {
    id: 3,
    title: "Data Visualization & Analysis Tool",
    description: "A Python-backend tool for ingesting large datasets and presenting complex analytical results through an interactive React frontend, focusing on data-driven decision-making for educators.",
    technologies: ["Python", "Pandas", "D3.js (Concept)", "React", "REST API"],
    githubUrl: "#", 
    liveUrl: "#", 
    icon: (props) => <BarChartIcon {...props} />,
    colorClass: "blue", 
  },
];


// --- Custom Icon Components (Lucide Icons via inline SVG) ---
const MicIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
);

const MessageIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);

const BarChartIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
);

const ServerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);

const ExternalLinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const UserPlaceholderIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const GitHubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.67c2.84-.95 5.81-2.82 5.81-6.4a4.34 4.34 0 0 0-1.12-3.23a4.13 4.13 0 0 0-.27-3.05s-1-.32-3.3-1.23a13.3 13.3 0 0 0-5.4 0c-2.3.91-3.3 1.23-3.3 1.23a4.13 4.13 0 0 0-.27 3.05a4.34 4.34 0 0 0-1.12 3.23c0 3.58 2.97 5.4 5.81 6.4a3.37 3.37 0 0 0-.94 2.67V22"/></svg>
);

const LinkedInIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);


// --- Project Card Component ---
const ProjectCard = ({ project }) => (
  <div className={`project-card ${project.colorClass}`}>
    <div className="card-header">
      <div className="card-icon-wrapper">
        {project.icon({ className: "w-8 h-8" })}
      </div>
      <h4 className="card-title">{project.title}</h4>
    </div>
    
    <p className="card-description">{project.description}</p>
    
    <div className="card-tech-list">
      {project.technologies.map((tech, i) => (
        <span key={i} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
    
    <div className="card-actions">
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="action-link view-code-link"
        aria-label={`View code for ${project.title}`}
      >
        View Code <GitHubIcon className="link-icon" />
      </a>
      <a 
        href={project.liveUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="action-link live-demo-link"
        aria-label={`Live demo for ${project.title}`}
      >
        Live Demo <ExternalLinkIcon className="link-icon" />
      </a>
    </div>
  </div>
);


// --- Main App Component ---
function App() {
  return (
    <>
      {/* Embedded CSS Styles - No imports, no Tailwind, all contained here. */}
      <style>
        {`
          /* Color Variables */
          :root {
              --color-bg-dark: #0f172a; /* Slate 900 */
              --color-bg-medium: #1e293b; /* Slate 800 */
              --color-primary: #6366f1; /* Indigo 500 */
              --color-primary-light: #818cf8; /* Indigo 400 */
              --color-text-light: #f1f5f9; /* Slate 100 */
              --color-text-gray: #94a3b8; /* Slate 400 */
              --color-border-dark: #334155; /* Slate 700 */
              --color-border-light: #475569;
              
              /* Project Card Colors */
              --color-red: #dc2626; 
              --color-green: #10b981;
              --color-blue: #3b82f6; 
              --color-purple: #7c3aed;
          }

          /* Base Styles */
          body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', sans-serif;
              background-color: var(--color-bg-dark);
              color: var(--color-text-light);
              min-height: 100vh;
              line-height: 1.5; /* Good default for readability */
          }

          .portfolio-app {
              min-height: 100vh;
          }

          a {
              text-decoration: none;
          }

          /* Header/Navigation */
          .main-header {
              padding: 1rem 2rem;
              background-color: var(--color-bg-medium);
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              position: sticky;
              top: 0;
              z-index: 10;
              border-bottom: 1px solid var(--color-primary);
          }

          .nav-container {
              max-width: 1280px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }

          .logo {
              font-size: 1.875rem;
              font-weight: 800;
              color: var(--color-primary-light);
              letter-spacing: 0.05em;
              transition: color 0.3s;
          }
          .logo:hover {
              color: var(--color-primary);
          }

          .nav-links {
              display: flex;
              gap: 1rem;
              align-items: center;
          }

          .social-icon {
              color: var(--color-text-gray);
              transition: color 0.2s;
              width: 1.5rem;
              height: 1.5rem;
          }
          .social-icon:hover {
              color: var(--color-text-light);
          }

          .cta-button {
              padding: 0.5rem 1.25rem;
              font-size: 0.875rem;
              font-weight: 700;
              color: var(--color-text-light);
              background-color: var(--color-primary);
              border-radius: 0.5rem;
              box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.5);
              transition: background-color 0.3s, transform 0.3s;
          }
          .cta-button:hover {
              background-color: #4f46e5;
              transform: scale(1.05);
          }

          /* Main Content Area */
          .main-content {
              max-width: 1280px;
              margin: 0 auto;
              padding: 5rem 2rem 5rem;
          }

          /* Hero Section */
          .hero-section {
              text-align: center;
              margin-bottom: 7rem;
          }

          .profile-placeholder {
              margin: 0 auto 2rem;
              width: 9rem;
              height: 9rem;
              border-radius: 50%;
              background-color: var(--color-bg-medium);
              display: flex;
              align-items: center;
              justify-content: center;
              border: 4px solid var(--color-primary);
              box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
          }

          .profile-icon {
              width: 5rem;
              height: 5rem;
              color: var(--color-primary-light);
          }

          .hero-subtitle {
              font-size: 1.125rem;
              font-weight: 600;
              color: var(--color-primary-light);
              margin-bottom: 0.5rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
          }

          .hero-title {
              font-size: 3rem;
              font-weight: 800;
              letter-spacing: -0.05em;
              color: var(--color-text-light);
              margin-bottom: 1rem;
          }

          .hero-title-highlight {
              color: var(--color-primary-light);
          }

          .hero-tagline {
              font-size: 1.5rem;
              font-weight: 300;
              color: var(--color-text-gray);
              margin-bottom: 2.5rem;
              max-width: 48rem; /* 768px */
              margin-left: auto;
              margin-right: auto;
          }

          .hero-bio {
              max-width: 64rem;
              margin: 0 auto 3rem;
              font-size: 1.25rem;
              line-height: 1.625;
              color: var(--color-text-light);
              padding: 0.5rem 1rem;
              border-left: 4px solid var(--color-primary);
              background-color: rgba(30, 41, 59, 0.5);
              border-radius: 0.5rem;
          }

          .hero-cta-main {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 1rem 2.5rem;
              border: 1px solid transparent;
              font-size: 1.25rem;
              font-weight: 700;
              border-radius: 0.75rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
              color: var(--color-text-light);
              background-color: var(--color-primary);
              transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
          }
          .hero-cta-main:hover {
              background-color: #4f46e5;
              transform: scale(1.05);
              box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5);
          }

          /* Skills Section */
          .skills-section {
              margin: 7rem 0;
          }

          .skills-title {
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--color-text-light);
              margin-bottom: 2rem;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 0.1em;
          }

          .skills-list {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 1rem;
          }

          .skill-tag {
              padding: 0.75rem 1.25rem;
              background-color: var(--color-bg-medium);
              color: var(--color-primary-light);
              font-size: 1rem;
              font-weight: 500;
              border-radius: 0.75rem;
              border: 1px solid var(--color-border-light);
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
              transition: background-color 0.15s, transform 0.15s;
              cursor: default;
          }
          .skill-tag:hover {
              background-color: #374151;
              transform: scale(1.05);
          }

          /* Projects Section */
          .projects-section {
              padding: 4rem 0;
          }

          .projects-header {
              font-size: 2.25rem;
              font-weight: 800;
              color: var(--color-text-light);
              text-align: center;
              margin-bottom: 1rem;
          }

          .projects-subtitle {
              font-size: 1.25rem;
              color: var(--color-text-gray);
              text-align: center;
              max-width: 48rem;
              margin: 0 auto 4rem;
          }

          .projects-grid {
              display: grid;
              grid-template-columns: 1fr; /* Default: 1 column for small mobile */
              gap: 2.5rem;
          }

          /* Project Card */
          .project-card {
              padding: 1.5rem;
              border-radius: 1rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
              border: 1px solid var(--color-border-dark);
              transition: transform 0.5s, box-shadow 0.5s;
              background-color: rgba(30, 41, 59, 0.7);
              display: flex;
              flex-direction: column;
          }

          .project-card:hover {
              transform: scale(1.02);
              box-shadow: 0 15px 20px -5px rgba(99, 102, 241, 0.5);
          }

          .card-header {
              display: flex;
              align-items: flex-start;
              gap: 1rem;
              margin-bottom: 1rem;
          }

          .card-icon-wrapper {
              padding: 0.75rem;
              background-color: rgba(99, 102, 241, 0.1);
              border-radius: 0.5rem;
              color: var(--color-primary-light);
          }

          .card-title {
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--color-text-light);
              line-height: 1.2;
              margin-top: 0.25rem;
          }

          .card-description {
              color: var(--color-text-gray);
              margin-bottom: 1.5rem;
              font-size: 1rem;
          }

          .card-tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              margin-bottom: 1.5rem;
          }

          .tech-tag {
              padding: 0.25rem 0.75rem;
              font-size: 0.75rem;
              font-weight: 500;
              color: var(--color-primary-light);
              background-color: var(--color-border-dark);
              border-radius: 9999px;
              border: 1px solid var(--color-primary);
          }

          .card-actions {
              display: flex;
              gap: 1rem;
              padding-top: 1rem;
              border-top: 1px solid var(--color-border-dark);
              margin-top: auto;
          }

          .action-link {
              display: flex;
              align-items: center;
              font-size: 0.875rem;
              font-weight: 600;
              transition: color 0.3s, background-color 0.3s;
              text-decoration: none;
              border-radius: 0.5rem;
          }

          .view-code-link {
              color: var(--color-primary-light);
              padding: 0.25rem 0; 
          }
          .view-code-link:hover {
              color: var(--color-primary);
          }

          .live-demo-link {
              color: var(--color-text-light);
              background-color: var(--color-primary);
              padding: 0.25rem 0.75rem;
          }
          .live-demo-link:hover {
              background-color: #4f46e5;
          }

          .link-icon {
              width: 1rem;
              height: 1rem;
              margin-left: 0.5rem;
          }

          /* Footer */
          .main-footer {
              padding: 2rem;
              text-align: center;
              color: var(--color-text-gray);
              font-size: 0.875rem;
              border-top: 1px solid var(--color-border-dark);
              margin-top: 5rem;
              background-color: rgba(30, 41, 59, 0.5);
          }

          /* Responsive Styles */
          @media (min-width: 640px) {
              .hero-title {
                  font-size: 4.5rem;
              }
              .projects-grid {
                  grid-template-columns: repeat(2, 1fr); /* Tablet (sm): 2 columns */
              }
          }

          @media (min-width: 1024px) {
              .projects-grid {
                  grid-template-columns: repeat(4, 1fr); /* Desktop (lg): 4 columns */
              }
          }

          /* Custom color overrides for Project Cards */
          .project-card.red {
              border-color: var(--color-red);
              background-color: rgba(220, 38, 38, 0.2); 
          }
          .project-card.green {
              border-color: var(--color-green);
              background-color: rgba(16, 185, 129, 0.2); 
          }
          .project-card.blue {
              border-color: var(--color-blue);
              background-color: rgba(59, 130, 246, 0.2); 
          }
          .project-card.purple { 
              border-color: var(--color-purple); 
              background-color: rgba(124, 58, 237, 0.2); 
          }
        `}
      </style>
      
      {/* React Component Structure */}
      <div className="portfolio-app">
        
        {/* 1. Navigation Bar */}
        <header className="main-header">
          <nav className="nav-container">
            <h1 className="logo">
              {userData.name}.dev
            </h1>
            <div className="nav-links">
              {/* Social Icons */}
              <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                <GitHubIcon className="social-icon" />
              </a>
              <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                <LinkedInIcon className="social-icon" />
              </a>
              {/* CTA Button */}
              <a 
                href={userData.ctaLink} 
                className="cta-button"
              >
                {userData.ctaText}
              </a>
            </div>
          </nav>
        </header>
        
        {/* 2. Hero Section */}
        <main className="main-content">
          <section className="hero-section">
            
            {/* Profile Photo Placeholder */}
            <div className="profile-placeholder">
              <UserPlaceholderIcon className="profile-icon" />
            </div>

            <p className="hero-subtitle">{userData.title}</p>
            <h2 className="hero-title">
              Hello, I'm <span className="hero-title-highlight">{userData.name}</span>.
            </h2>
            <h3 className="hero-tagline">
              {userData.tagline}
            </h3>
            
            {/* Bio/Summary */}
            <p className="hero-bio">
              {userData.bio}
            </p>
            
            {/* Call to Action */}
            <a 
              href={userData.ctaLink} 
              className="hero-cta-main"
            >
              <CodeIcon className="w-6 h-6 mr-3" />
              {userData.ctaText}
            </a>
          </section>
          
          {/* 3. Skills Bar */}
          <section className="skills-section">
            <h3 className="skills-title">
              Key Technologies & Focus Areas
            </h3>
            <div className="skills-list">
              {userData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* 4. Projects Grid */}
          <section id="projects" className="projects-section">
              <h2 className="projects-header">Featured Work</h2>
              <p className="projects-subtitle">
                  Highlighting key projects in full-stack development, systems programming, and specialized research in AI for education.
              </p>

              <div className="projects-grid">
                  {projectData.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
          </section>

        </main>

        {/* Footer (Placeholder) */}
        <footer className="main-footer">
          &copy; {new Date().getFullYear()} {userData.name}. Built with React and Custom CSS.
        </footer>
      </div>
    </>
  )
}

export default App;