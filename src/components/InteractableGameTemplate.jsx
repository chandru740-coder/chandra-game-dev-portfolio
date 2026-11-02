import React, { useEffect } from "react";
import ImageSlot from "./ImageSlot.jsx";
import ProjectSectionNavigation from "./ProjectSectionNavigation.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import { portfolioImages } from "../data/portfolio.js";

const futureSections = [
  { id: "gameplay-features", title: "Gameplay Features" },
  { id: "interaction-systems", title: "Interaction Systems" },
  { id: "technical-implementation", title: "Technical Implementation" },
  {
    id: "screenshots-and-gameplay-showcase",
    title: "Screenshots and Gameplay Showcase",
  },
];

const projectSections = [
  { id: "overview", label: "Overview" },
  { id: "currently-in-development", label: "In Development" },
  ...futureSections.map(({ id, title }) => ({ id, label: title })),
];

export default function InteractableGameTemplate() {
  useEffect(() => {
    window.hallmarkSlots({
      "interactable-game-template": portfolioImages["interactable-game-template"],
    });
  }, []);

  return (
    <div className="interactable-page">
      <SiteHeader projectPage includeHome />
      <main className="interactable-project">
        <section
          className="interactable-project__hero"
          aria-labelledby="interactable-project-title"
        >
          <div className="container">
            <a className="interactable-project__back" href="/#work">
              Back to Featured Projects
            </a>
            <div className="interactable-project__hero-grid">
              <ImageSlot
                name="interactable-game-template"
                label="Interactable Game Template"
                hint="Project home screen."
                alt="Interactable Game Template project home screen."
                className="interactable-project__visual"
              />
              <div className="interactable-project__copy">
                <p className="interactable-project__status">IN PROGRESS</p>
                <p className="interactable-project__subtitle">
                  Gameplay Systems Development
                </p>
                <h1 id="interactable-project-title">
                  Interactable Game Template
                </h1>
              </div>
            </div>
          </div>
        </section>

        <ProjectSectionNavigation sections={projectSections} />

        <section
          className="interactable-project__overview"
          id="overview"
          data-project-section
          data-project-nav-label="Overview"
          aria-labelledby="interactable-overview-title"
        >
          <div className="container">
            <h2 id="interactable-overview-title">Overview</h2>
            <p>
              An interactive game template currently under development, focused
              on building reusable gameplay interactions and systems. This
              project explores gameplay implementation, interaction design and
              modular systems.
            </p>
          </div>
        </section>

        <section
          className="interactable-project__development"
          id="currently-in-development"
          data-project-section
          data-project-nav-label="In Development"
          aria-labelledby="interactable-development-title"
        >
          <div className="container interactable-project__development-layout">
            <h2 id="interactable-development-title">
              Currently in Development
            </h2>
            <p>
              This project is actively being developed. More gameplay features,
              implementation details, screenshots and technical breakdowns will
              be added as development progresses.
            </p>
          </div>
        </section>

        <section
          className="interactable-project__roadmap"
          aria-label="Project sections under development"
        >
          <div className="container interactable-project__future-grid">
            {futureSections.map((section) => (
              <article
                className="interactable-project__future-item"
                id={section.id}
                data-project-section
                data-project-nav-label={section.title}
                key={section.id}
              >
                <p>Upcoming</p>
                <h2>{section.title}</h2>
                <span>Details will be added as development progresses.</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter projectPage />
    </div>
  );
}
