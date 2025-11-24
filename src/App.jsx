import React from 'react';

// --- NEW LINE: Import your profile image from the assets folder ---
import profilePicture from './assets/me.jpg'; 

// --- User Data: (Updated to use imported image) ---
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
    "Custom CSS", 
    "Scalable Systems", 
    "Education Technology Development"
  ],
  socials: {
    github: "https://github.com/Kulusia/lab",
    linkedin: "https://www.linkedin.com/in/kulusha-ng-ambi-50684132b", 
  },
  ctaText: "Explore My Projects",
  ctaLink: "#projects", 
  
  // Use the imported variable for the image source
  profileImageUrl: profilePicture, 
};

// --- Contact Details (Unchanged) ---
const contactData = {
    email: "kulusiangambi589@gmail.com",
    phone: "+260 776313410",
    location: "Mpika, Zambia",
    freelanceStatus: "Available for Freelance & Contract Work",
    jobLinkText: "Explore Job Opportunities/Services",
    jobLinkUrl: "#services",
};

// --- Projects Data: (Unchanged) ---
const projectData = [
  // 1. Systems/Core focus
  {
    id: 4, 
    title: "High-Performance Data Processing API",
    description: "Developed a robust, low-latency API backend using C++ for core data processing logic and  Java (Spring Boot)  for the service layer. Data persistence and complex querying managed via a highly optimized SQL database structure, demonstrating strong systems programming and DBMS expertise.",
    technologies: ["C++", "Java (Spring Boot)", "PostgreSQL/SQL", "REST API", "Low-Latency Systems", "DBMS"],
    githubUrl: "#", 
    liveUrl: "#", 
    icon: (props) => <ServerIcon {...props} />, 
    colorClass: "purple", 
  },
  // 2. Specialized AI focus
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
  // 3. Full Stack focus
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
  // 4. Data/Analysis focus
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


// --- Custom Icon Components (Unchanged) ---
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

const GitHubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.67c2.84-.95 5.81-2.82 5.81-6.4a4.34 4.34 0 0 0-1.12-3.23a4.13 4.13 0 0 0-.27-3.05s-1-.32-3.3-1.23a13.3 13.3 0 0 0-5.4 0c-2.3.91-3.3 1.23-3.3 1.23a4.13 4.13 0 0 0-.27 3.05a4.34 4.34 0 0 0-1.12 3.23c0 3.58 2.97 5.4 5.81 6.4a3.37 3.37 0 0 0-.94 2.67V22"/></svg>
);

const LinkedInIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><circle cx="12" cy="8" r="2"/></svg>
);

const PhoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2 2c-1.39 0-2.75-.24-4.01-.79a15.26 15.26 0 0 1-7.31-7.31c-.55-1.26-.79-2.62-.79-4.01a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2c0 1.09-.33 2.12-.93 3.03a12.44 12.44 0 0 0 3.73 3.73c.91-.6 1.94-.93 3.03-.93a2 2 0 0 1 2 2z"/></svg>
);

const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);


// --- Project Card Component (Unchanged) ---
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
  
  const ctaTextShort = "K. Projects";
  const ctaTextLong = userData.ctaText;

  return (
    <>
      {/* Embedded CSS Styles - UPDATED for Profile Picture Styling */}
      <style>
        {`
          /* Color Variables (Soft Earth Tones) */
          :root {
              --color-bg-base: #e0f2fe; /* Very Light Blue/Sky */
              --color-bg-soft: rgba(255, 255, 255, 0.4); /* HIGHLY Transparent White */
              --color-text-dark: #0f172a; /* Dark Blue/Black */
              --color-text-medium: #475569; /* Muted Slate Gray */
              --color-accent: #3b82f6; /* Bright Blue */
              --color-accent-dark: #1d4ed8; /* Darker Blue */
              --color-shadow: rgba(0, 0, 0, 0.1); /* Soft Shadow */
              --color-border: rgba(255, 255, 255, 0.5); /* Transparent Border */
              
              /* Project Card Colors */
              --color-red: #f87171; 
              --color-green: #4ade80;
              --color-blue: #60a5fa; 
              --color-purple: #a78bfa;
          }

          /* Base Styles (Unchanged) */
          body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', sans-serif;
              background: linear-gradient(135deg, var(--color-bg-base) 0%, #bfdbfe 100%); 
              color: var(--color-text-dark);
              min-height: 100vh;
              line-height: 1.6; 
          }

          .portfolio-app {
              min-height: 100vh;
          }

          a {
              text-decoration: none;
          }
          
          /* Header/Navigation (Unchanged) */
          .main-header {
              padding: 1rem 1rem;
              background-color: var(--color-bg-soft);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              box-shadow: 0 4px 15px var(--color-shadow);
              position: sticky;
              top: 0;
              z-index: 10;
              border-bottom: 1px solid var(--color-border);
          }

          .nav-container {
              max-width: 1280px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }

          .logo {
              font-size: 1.4rem;
              font-weight: 700;
              color: var(--color-accent-dark);
              letter-spacing: -0.025em;
              transition: color 0.3s;
          }
          
          .nav-links {
              display: flex;
              gap: 0.5rem;
              align-items: center;
          }
          
          .page-link {
              padding: 0.5rem 0.75rem;
              font-size: 0.875rem;
              font-weight: 500;
              color: var(--color-text-medium);
              transition: color 0.3s, background-color 0.3s;
              border-radius: 0.5rem;
              display: none;
          }

          .social-icon-wrapper {
             display: flex;
             align-items: center;
          }

          .social-icon {
              color: var(--color-text-medium);
              transition: color 0.2s;
              width: 1.25rem;
              height: 1.25rem;
          }
          .social-icon:hover {
              color: var(--color-accent-dark);
          }
          
          .cta-button {
              padding: 0.4rem 0.8rem;
              font-size: 0.75rem;
              font-weight: 600;
              color: var(--color-bg-base); 
              background-color: var(--color-accent-dark);
              border-radius: 0.75rem; 
              box-shadow: 0 4px 10px rgba(29, 78, 216, 0.4);
              transition: background-color 0.3s, transform 0.3s;
          }
          .cta-button:hover {
              background-color: var(--color-text-dark);
              transform: translateY(-1px);
          }
          
          .cta-button .cta-long {
              display: none;
          }
          .cta-button .cta-short {
              display: inline;
          }
          

          /* Main Content Area (Unchanged) */
          .main-content {
              max-width: 1280px;
              margin: 0 auto;
              padding: 2rem 1rem 4rem; 
          }
          
          /* Hero Section Styles */
          .hero-section {
              text-align: center;
              margin-bottom: 3rem;
              padding: 1rem 0;
          }

          /* --- REVISED STYLES FOR PROFILE PICTURE CONTAINER --- */
          .profile-placeholder {
              margin: 0 auto 1rem; 
              width: 6rem;
              height: 6rem;
              border-radius: 50%;
              background-color: var(--color-bg-soft);
              border: 3px solid var(--color-accent);
              box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.2); 
              overflow: hidden; /* Ensures the image stays within the circle border */
              display: flex; /* Helps center if image fails to load/has issues */
              align-items: center; 
              justify-content: center;
          }
          
          /* --- NEW STYLE FOR THE IMAGE ELEMENT --- */
          .profile-picture {
              width: 100%; /* Fill the container */
              height: 100%; /* Fill the container */
              object-fit: cover; /* Ensures the image covers the area without distortion */
              display: block;
          }
          /* --- (End of Revisions) --- */


          .hero-subtitle {
              font-size: 0.875rem;
              font-weight: 700;
              color: var(--color-accent-dark);
              margin-bottom: 0.5rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
          }

          .hero-title {
              font-size: 2rem; 
              font-weight: 800;
              letter-spacing: -0.05em;
              color: var(--color-text-dark);
              margin-bottom: 0.5rem;
          }

          .hero-tagline {
              font-size: 1rem; 
              font-weight: 400;
              color: var(--color-text-medium);
              margin-bottom: 1.5rem;
              max-width: 48rem;
              margin-left: auto;
              margin-right: auto;
              padding: 0 0.5rem;
          }

          .hero-bio {
              max-width: 50rem;
              margin: 0 auto 2rem; 
              font-size: 0.9rem; 
              line-height: 1.75;
              color: var(--color-text-dark);
              padding: 1rem; 
              border-left: 5px solid var(--color-accent);
              background-color: var(--color-bg-soft); 
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              border-radius: 1rem; 
              box-shadow: 0 4px 8px var(--color-shadow);
              text-align: left;
              border: 1px solid var(--color-border);
          }

          .hero-cta-main {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 0.75rem 1.8rem; 
              font-size: 0.9rem; 
              font-weight: 700;
              border-radius: 1rem; 
              color: var(--color-bg-base);
              background-color: var(--color-accent);
              transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
              box-shadow: 0 8px 15px rgba(59, 130, 246, 0.4);
          }
          .hero-cta-main:hover {
              background-color: var(--color-accent-dark);
              transform: translateY(-2px);
              box-shadow: 0 10px 20px rgba(59, 130, 246, 0.6);
          }

          .skills-section {
              margin: 3rem 0; 
          }

          .skills-title, .section-title {
              font-size: 1.25rem; 
              font-weight: 700;
              color: var(--color-text-dark);
              margin-bottom: 1.5rem; 
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--color-accent);
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
          }
          
          .projects-header {
              font-size: 1.25rem; 
              font-weight: 700;
              color: var(--color-text-dark);
              margin-bottom: 0.5rem;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 0.1em;
          }
          
          .projects-subtitle {
              text-align: center;
              color: var(--color-text-medium);
              margin-bottom: 2rem; 
              font-size: 0.9rem;
          }

          .skills-list {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 0.5rem; 
          }

          .skill-tag {
              padding: 0.4rem 0.8rem; 
              background-color: var(--color-bg-soft); 
              color: var(--color-text-dark);
              font-size: 0.8rem; 
              font-weight: 500;
              border-radius: 0.5rem;
              border: 1px solid var(--color-border);
              box-shadow: 0 2px 4px var(--color-shadow);
              transition: background-color 0.15s, transform 0.15s;
              cursor: default;
          }

          .projects-grid {
              display: grid;
              grid-template-columns: 1fr; 
              gap: 1.5rem; 
          }

          .project-card {
              padding: 1.25rem; 
              border-radius: 1rem; 
              background-color: var(--color-bg-soft); 
              backdrop-filter: blur(10px); 
              -webkit-backdrop-filter: blur(10px);
              box-shadow: 0 8px 15px var(--color-shadow);
              border: 1px solid var(--color-border);
              transition: transform 0.3s, box-shadow 0.3s;
              display: flex;
              flex-direction: column;
          }
          
          .card-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.75rem;
          }

          .card-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin: 0;
          }

          .card-description {
            font-size: 0.9rem;
            margin-bottom: 1rem;
            flex-grow: 1; 
          }
          
          .card-tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.25rem;
          }

          .tech-tag {
              padding: 0.2rem 0.6rem; 
              font-size: 0.7rem; 
              font-weight: 500;
              color: var(--color-text-medium);
              background-color: rgba(255, 255, 255, 0.8);
              border-radius: 9999px;
              border: 1px solid var(--color-border);
          }

          .card-actions {
              display: flex;
              gap: 0.75rem;
              margin-top: auto; 
          }
          
          .action-link {
            display: inline-flex;
            align-items: center;
            font-size: 0.8rem;
            font-weight: 600;
            transition: opacity 0.2s;
          }
          
          .link-icon {
            width: 1rem;
            height: 1rem;
            margin-left: 0.3rem;
          }

          .live-demo-link {
              color: var(--color-bg-base);
              background-color: var(--color-accent-dark);
              padding: 0.3rem 0.8rem;
              border-radius: 0.5rem;
          }
          
          .contact-section, .services-section {
              margin: 3rem 0; 
          }

          .contact-container {
              max-width: 600px;
              margin: 0 auto;
              padding: 1.5rem; 
              background-color: var(--color-bg-soft);
              backdrop-filter: blur(10px);
              border-radius: 1.5rem;
              box-shadow: 0 8px 15px var(--color-shadow);
              border: 1px solid var(--color-border);
              text-align: center;
          }

          .freelance-status {
              font-size: 1rem; 
              font-weight: 700;
              color: var(--color-red);
              background-color: rgba(248, 113, 113, 0.2);
              display: inline-block;
              padding: 0.4rem 1rem; 
              border-radius: 1rem;
              margin-bottom: 1.5rem; 
              border: 1px solid var(--color-red);
          }

          .contact-detail {
              display: flex;
              align-items: center;
              gap: 0.75rem; 
              margin-bottom: 0.75rem; 
              font-size: 0.9rem; 
              font-weight: 500;
              color: var(--color-text-dark);
              justify-content: center;
          }
          
          .contact-icon {
              color: var(--color-accent);
              width: 1.25rem; 
              height: 1.25rem; 
          }
          
          .services-container {
              max-width: 400px;
              margin: 0 auto;
              text-align: center;
              padding: 1.5rem; 
              background-color: var(--color-bg-soft);
              backdrop-filter: blur(10px);
              border-radius: 1.5rem;
              box-shadow: 0 8px 15px var(--color-shadow);
              border: 1px solid var(--color-border);
          }
          
          .services-container p {
              color: var(--color-text-medium);
              margin-bottom: 1.5rem; 
              font-size: 0.9rem;
          }

          .job-link-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 0.6rem 1.2rem; 
              font-size: 0.9rem; 
              font-weight: 600;
              border-radius: 0.75rem; 
              color: var(--color-bg-base);
              background-color: var(--color-purple);
              transition: background-color 0.3s, transform 0.3s;
              box-shadow: 0 4px 8px rgba(167, 139, 250, 0.4);
          }

          /* Footer (Unchanged) */
          .main-footer {
              padding: 1rem; 
              text-align: center;
              color: var(--color-text-medium);
              font-size: 0.75rem; 
              border-top: 1px solid var(--color-border);
              margin-top: 2rem; 
              background-color: var(--color-bg-soft);
              backdrop-filter: blur(4px);
              -webkit-backdrop-filter: blur(4px);
          }
          
          /* --- RESPONSIVE STYLES (BREAKPOINTS) --- */

          @media (min-width: 640px) { /* Small devices (Tablets) */
              
              /* Nav (Unchanged) */
              .main-header {
                padding: 1rem 1.5rem;
              }
              .page-link {
                display: block;
              }
              .nav-links {
                gap: 0.75rem;
              }
              .cta-button {
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
              }
              .cta-button .cta-long {
                display: inline;
              }
              .cta-button .cta-short {
                display: none;
              }

              /* Hero (Revising size for tablets) */
              .main-content {
                  padding: 4rem 1.5rem 6rem;
              }
              .hero-section {
                  margin-bottom: 5rem;
              }
              .profile-placeholder {
                  width: 8rem; /* Increased size */
                  height: 8rem; /* Increased size */
                  margin-bottom: 1.5rem;
              }
              .hero-subtitle {
                  font-size: 1rem;
              }
              .hero-title {
                  font-size: 3.5rem;
                  margin-bottom: 0.75rem;
              }
              .hero-tagline {
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
              }
              .hero-bio {
                  padding: 1.5rem;
                  font-size: 1rem;
              }
              .skills-section, .contact-section, .services-section {
                  margin: 5rem 0;
              }
              .skills-title, .section-title {
                  font-size: 1.5rem;
                  margin-bottom: 2rem;
              }
              .skill-tag {
                  font-size: 0.875rem;
                  padding: 0.5rem 1rem;
              }
              .projects-grid {
                  grid-template-columns: repeat(2, 1fr); 
                  gap: 2rem;
              }
              .project-card {
                padding: 1.5rem;
              }
              .card-title {
                font-size: 1.25rem;
              }
              .card-description {
                font-size: 1rem;
              }
              .freelance-status {
                font-size: 1.25rem;
                padding: 0.5rem 1.5rem;
              }
              .contact-detail {
                font-size: 1rem;
              }
              .main-footer {
                font-size: 0.875rem;
              }
          }

          @media (min-width: 1024px) { /* Medium/Large devices (Laptops/Desktops) */
              .hero-title {
                  font-size: 4.5rem;
              }
              .projects-grid {
                  grid-template-columns: repeat(4, 1fr); 
              }
          }

          /* Custom accent color borders for Project Cards (Unchanged) */
          .project-card.red {
              box-shadow: 0 0 0 4px var(--color-red) inset; 
          }
          .project-card.green {
              box-shadow: 0 0 0 4px var(--color-green) inset;
          }
          .project-card.blue {
              box-shadow: 0 0 0 4px var(--color-blue) inset;
          }
          .project-card.purple { 
              box-shadow: 0 0 0 4px var(--color-purple) inset;
          }
        `}
      </style>
      
      {/* React Component Structure */}
      <div className="portfolio-app">
        
        {/* 1. Navigation Bar (Unchanged) */}
        <header className="main-header">
          <nav className="nav-container">
            <h1 className="logo">
              {userData.name}.dev
            </h1>
            <div className="nav-links">
              <a href="#projects" className="page-link">Projects</a>
              <a href="#contact" className="page-link">Contact</a>
              <a href="#services" className="page-link">Services</a>
              
              <span className="social-icon-wrapper">
                <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                  <GitHubIcon className="social-icon" />
                </a>
              </span>
              <span className="social-icon-wrapper">
                <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                  <LinkedInIcon className="social-icon" />
                </a>
              </span>
              
              <a 
                href={userData.ctaLink} 
                className="cta-button"
              >
                <span className="cta-short">{ctaTextShort}</span>
                <span className="cta-long">{ctaTextLong}</span>
              </a>
            </div>
          </nav>
        </header>
        
        {/* 2. Main Content */}
        <main className="main-content">
          
          {/* Hero Section */}
          <section className="hero-section">
            
            {/* --- REVISED: Use the actual image element --- */}
            <div className="profile-placeholder">
              <img 
                src={userData.profileImageUrl} 
                alt={`${userData.name}'s profile picture`} 
                className="profile-picture" 
              />
            </div>
            
            <p className="hero-subtitle">{userData.title}</p>
            <h2 className="hero-title">
              Hello, I'm <span className="hero-title-highlight">{userData.name}</span>.
            </h2>
            <h3 className="hero-tagline">
              {userData.tagline}
            </h3>
            <p className="hero-bio">
              {userData.bio}
            </p>
            <a 
              href={userData.ctaLink} 
              className="hero-cta-main"
            >
              <CodeIcon className="w-6 h-6 mr-3" />
              {userData.ctaText}
            </a>
          </section>
          
          {/* Skills Bar (Unchanged) */}
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
          
          {/* Projects Grid (Unchanged) */}
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

          <hr/>
          
          {/* 4. Services/Jobs Section (Unchanged) */}
          <section id="services" className="services-section">
              <h2 className="section-title">My Services</h2>
              <div className="services-container">
                  <p>
                      I am available for consultation and contract work in Full-Stack Development, Systems Architecture, and specialized AI/ML solutions. Let's discuss your project needs!
                  </p>
                  <a 
                      href={contactData.jobLinkUrl} 
                      className="job-link-button"
                  >
                      <BriefcaseIcon className="w-5 h-5 mr-2" />
                      {contactData.jobLinkText}
                  </a>
              </div>
          </section>
          
          <hr/>

          {/* 5. Contact Section (Unchanged) */}
          <section id="contact" className="contact-section">
              <h2 className="section-title">Contact Me</h2>
              <div className="contact-container">
                  <span className="freelance-status">
                      {contactData.freelanceStatus}
                  </span>
                  
                  <div className="contact-detail">
                      <MailIcon className="contact-icon" />
                      <a href={`mailto:${contactData.email}`} title="Email Me">
                          {contactData.email}
                      </a>
                  </div>

                  <div className="contact-detail">
                      <PhoneIcon className="contact-icon" />
                      <span>{contactData.phone}</span>
                  </div>

                  <div className="contact-detail">
                      <MapPinIcon className="contact-icon" />
                      <span>{contactData.location}</span>
                  </div>
              </div>
          </section>

        </main>

        {/* Footer (Unchanged) */}
        <footer className="main-footer">
          &copy; {new Date().getFullYear()} {userData.name}. Built with React and Custom CSS.
        </footer>
      </div>
    </>
  ) 
}

export default App;