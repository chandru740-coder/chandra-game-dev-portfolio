import React from "react";
import { projects } from "../data/portfolio.js";
import { portfolioLinks } from "../data/links.js";
import ImageSlot from "./ImageSlot.jsx";

function ProjectCard({ project }) {
  const content = (
    <>
      <ImageSlot
        name={project.id}
        label={project.imageLabel}
        hint={project.imageHint}
        alt={project.imageAlt || `Placeholder for ${project.title.toLowerCase()} work.`}
        className="project__image"
      />
      <div className="project__copy">
        {project.status && (
          <p className="project__status">{project.status}</p>
        )}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </>
  );

  return (
    <article className="project">
      {project.href ? (
        <a
          className="project__link"
          href={project.href}
          aria-label={`View ${project.title} project`}
        >
          {content}
        </a>
      ) : (
        content
      )}
      {project.id === "game-development" &&
        (portfolioLinks.projects.echoesItchIo ? (
          <a
            className="project-external-link"
            href={portfolioLinks.projects.echoesItchIo}
            target="_blank"
            rel="noreferrer"
          >
            View &amp; Download on itch.io ↗
          </a>
        ) : (
          <span
            className="project-external-link project-external-link--pending"
            aria-label="Echoes of Tomorrow itch.io link not provided"
            title="Echoes of Tomorrow itch.io URL not provided"
          >
            View &amp; Download on itch.io ↗
            <span>URL pending</span>
          </span>
        ))}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="work-title">Featured Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
