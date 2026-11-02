import React from "react";
import CaseStudySection from "./CaseStudySection.jsx";
import CarCinematicShowcase from "./CarCinematicShowcase.jsx";
import ProjectSectionNavigation from "./ProjectSectionNavigation.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import { carCinematicSections } from "../data/car-cinematics.js";

const projectSections = [
  { id: "overview", label: "Overview" },
  ...carCinematicSections.map((section) => ({
    id: section.id,
    label: section.navLabel || section.title,
  })),
  { id: "final-cinematic", label: "Final Cinematic" },
];

export default function CarCinematicsCaseStudy() {
  return (
    <>
      <SiteHeader projectPage includeHome />
      <main className="case-study car-case-study">
        <section className="case-hero car-case-hero" aria-labelledby="car-case-title">
          <figure className="case-image case-hero__image">
            <img
              src="/images/car-cinematics/hero/Screenshot%202026-11-01%20140607.png"
              alt=""
              loading="eager"
              onError={(event) => event.currentTarget.remove()}
            />
          </figure>
          <div className="case-hero__content container">
            <a className="case-back-link" href="/#work">
              Back to Work
            </a>
            <p className="case-hero__type">
              Unreal Engine 5 · Environment Design · Real-Time Cinematics
            </p>
            <h1 id="car-case-title">
              Premium Garage <span>— Automotive Cinematics</span>
            </h1>
          </div>
        </section>

        <ProjectSectionNavigation sections={projectSections} />

        <section
          className="case-section case-section--text-only car-case-overview"
          id="overview"
          data-project-section
          data-project-nav-label="Overview"
          aria-labelledby="overview-title"
        >
          <div className="container">
            <div className="case-section__layout">
              <div className="case-section__copy">
                <h2 id="overview-title">Overview</h2>
                <p className="case-section__lead">
                  An automotive cinematic project developed in Unreal Engine,
                  featuring a premium garage environment designed to showcase
                  a sports car through cinematic camera sequences. The project
                  explores environment presentation, camera composition,
                  lighting and sequencing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {carCinematicSections.map((section, index) => (
          <CaseStudySection
            key={section.id}
            section={section}
            layout={index % 2 === 0 ? "right" : "left"}
          />
        ))}
        <CarCinematicShowcase />
      </main>
      <SiteFooter projectPage />
    </>
  );
}
