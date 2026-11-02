import React from "react";
import CaseStudySection from "./CaseStudySection.jsx";
import GameplayShowcase from "./GameplayShowcase.jsx";
import ProjectImage from "./ProjectImage.jsx";
import ProjectSectionNavigation from "./ProjectSectionNavigation.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import { caseStudyVideos, echoesSections } from "../data/echoes.js";
import { portfolioImages } from "../data/portfolio.js";

const sectionLayouts = ["right", "left", "right", "left", "right", "left", "right", "left", "right", "left"];
const echoesHeroImage = {
  src: portfolioImages["game-development"],
  width: 1917,
  height: 1042,
  alt: "A ruined stone bridge and stairway in Echoes of Tomorrow.",
  caption: null,
};
const projectSections = [
  ...echoesSections.map((section) => ({
    id: section.id,
    label: section.navLabel || section.title,
  })),
  ...caseStudyVideos.map((video) => ({
    id: video.id,
    label: video.navLabel || video.title,
  })),
];

export default function EchoesCaseStudy() {
  return (
    <>
      <SiteHeader projectPage />
      <main className="case-study">
        <section className="case-hero" aria-labelledby="case-title">
          <ProjectImage
            image={echoesHeroImage}
            className="case-hero__image"
            loading="eager"
            zoomable={false}
            caption={null}
          />
          <div className="case-hero__content container">
            <a className="case-back-link" href="/#work">
              Back to Work
            </a>
            <p className="case-hero__type">Third-person action game</p>
            <h1 id="case-title">Echoes of Tomorrow</h1>
            <p className="case-hero__summary">
              Developed in Unreal Engine 5, with gameplay systems primarily
              implemented through Blueprints.
            </p>
            <ul className="case-hero__details" aria-label="Project details">
              <li>Unreal Engine 5</li>
              <li>Primarily Blueprint-based</li>
            </ul>
          </div>
        </section>

        <ProjectSectionNavigation sections={projectSections} />

        {echoesSections.map((section, index) => (
          <CaseStudySection
            key={section.id}
            section={section}
            layout={sectionLayouts[index % sectionLayouts.length]}
          />
        ))}

        <GameplayShowcase />
      </main>
      <SiteFooter projectPage />
    </>
  );
}
