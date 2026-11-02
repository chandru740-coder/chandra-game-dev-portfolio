import React from "react";
import { portfolioLinks } from "../data/links.js";

const practiceAreas = [
  {
    title: "Gameplay Systems Programming",
    description:
      "Building interactive gameplay systems using Unreal Engine and Blueprint programming, with a focus on combat mechanics, enemy behaviour, player interactions and gameplay logic.",
    skills: [
      "Unreal Engine 5",
      "Blueprint Programming",
      "Gameplay Systems",
      "Combat Mechanics",
      "AI Behaviour",
      "Interactive Systems",
    ],
  },
  {
    title: "Technical Game Design",
    description:
      "Designing and implementing gameplay experiences through interactive mechanics, level design, environment design and the integration of gameplay systems.",
    skills: [
      "Gameplay Design",
      "Level Design",
      "Environment Design",
      "Game Mechanics",
      "Player Interaction",
      "Gameplay Prototyping",
    ],
  },
  {
    title: "Real-Time Cinematics & 3D Animation",
    description:
      "Creating cinematic visual experiences through 3D animation, camera composition, scene setup and real-time cinematic workflows.",
    skills: [
      "Blender",
      "3D Animation",
      "Camera Animation",
      "Unreal Engine Sequencer",
      "Cinematic Composition",
      "Lighting and Rendering",
    ],
  },
];

function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg className="about-social__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 8.7H2.4V21h2.8V8.7ZM3.8 2.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.6 13.9c0-3.7-2-5.5-4.7-5.5-2.2 0-3.2 1.2-3.8 2V8.7h-2.8V21h2.8v-6.1c0-1.6.3-3.2 2.4-3.2s2.1 1.9 2.1 3.3V21h2.8l1.2-7.1Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg className="about-social__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .9a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.1a10.7 10.7 0 0 1 5.7 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.2-2.7 5.2-5.3 5.5.4.4.8 1 .8 2v3c0 .4.2.7.8.6A11.2 11.2 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (type === "itchio") {
    return (
      <svg className="about-social__icon about-social__icon--stroke" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.2 5.2 6 3.4h12l1.8 1.8-.8 4.3-1.7 1.1v7.9l-1.7 2.1h-9l-1.7-2.1v-7.9l-1.7-1.1-.8-4.3Zm5.1 6.1v2.1m5.4-2.1v2.1M7.2 5.1l1 3.3h7.6l1-3.3" />
      </svg>
    );
  }

  return (
    <svg className="about-social__icon about-social__icon--stroke" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="1.5" />
      <path d="m3.8 6 8.2 6.4L20.2 6" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 className="about-title" id="about-title">What I Do</h2>
        <p className="about-intro">
          I&apos;m a Gameplay Systems Programmer focused on building interactive
          gameplay experiences using Unreal Engine 5 and Blueprint programming.
          My work includes combat systems, enemy AI, gameplay mechanics and
          real-time cinematics, alongside 3D animation and environment design.
        </p>
        <ul className="practice-list">
          {practiceAreas.map((area) => (
            <li key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="skills-list" aria-label={`${area.title} skills`}>
                {area.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="about-resources">
          <section
            className="about-resume"
            id="resume"
            aria-labelledby="resume-title"
          >
            <h3 id="resume-title">Resume</h3>
            <p>Explore my experience, technical skills and project work.</p>
            <a className="button" href="/files/resume.pdf" download="resume.pdf">
              Download Resume
            </a>
          </section>
          <section className="about-social" aria-labelledby="social-title">
            <h3 id="social-title">Find me online</h3>
            <ul className="about-social__list">
              {portfolioLinks.profiles.map((link) => (
                <li key={link.id}>
                  {link.href ? (
                    <a
                      className="about-social__link"
                      href={link.href}
                      target={link.id === "email" ? undefined : "_blank"}
                      rel={link.id === "email" ? undefined : "noreferrer"}
                    >
                      <SocialIcon type={link.icon} />
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <span
                      className="about-social__link about-social__link--pending"
                      aria-label={`${link.label} link not provided`}
                      title={`${link.label} URL not provided`}
                    >
                      <SocialIcon type={link.icon} />
                      <span>{link.label}</span>
                      <span className="about-social__pending">Add link</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
