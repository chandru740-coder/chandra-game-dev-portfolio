import React, { useEffect } from "react";
import About from "./components/About.jsx";
import CarCinematicsCaseStudy from "./components/CarCinematicsCaseStudy.jsx";
import EchoesCaseStudy from "./components/EchoesCaseStudy.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Hero from "./components/Hero.jsx";
import InteractableGameTemplate from "./components/InteractableGameTemplate.jsx";
import Projects from "./components/Projects.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { portfolioImages } from "./data/portfolio.js";

const ECHOES_PATH = "/projects/echoes-of-tomorrow";
const CAR_CINEMATICS_PATH = "/projects/car-cinematics";
const INTERACTABLE_TEMPLATE_PATH = "/projects/interactable-game-template";

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isEchoesCaseStudy = currentPath === ECHOES_PATH;
  const isCarCinematics = currentPath === CAR_CINEMATICS_PATH;
  const isInteractableTemplate = currentPath === INTERACTABLE_TEMPLATE_PATH;
  const isProjectPlaceholder = isCarCinematics || isInteractableTemplate;
  const isHomepage = !isEchoesCaseStudy && !isProjectPlaceholder;

  useEffect(() => {
    document.title = isEchoesCaseStudy
      ? "Echoes of Tomorrow | Project Case Study"
      : isCarCinematics
        ? "Premium Garage — Automotive Cinematics | Project"
        : isInteractableTemplate
          ? "Interactable Game Template | Project"
          : "Gameplay Systems Programmer | Portfolio";

    if (isHomepage) {
      const availableImages = Object.fromEntries(
        Object.entries(portfolioImages).filter(([, image]) => image !== null),
      );
      window.hallmarkSlots(availableImages);
    }
  }, [isEchoesCaseStudy, isCarCinematics, isInteractableTemplate, isHomepage]);

  if (isEchoesCaseStudy) {
    return <EchoesCaseStudy />;
  }

  if (isCarCinematics) {
    return <CarCinematicsCaseStudy />;
  }

  if (isInteractableTemplate) {
    return <InteractableGameTemplate />;
  }

  return (
    <div className="home-page">
      <SiteHeader includeHome brandLabel="Gameplay Systems Programmer" />
      <main>
        <Hero />
        <Projects />
        <FeaturedProject />
        <About />
      </main>
      <SiteFooter label="Gameplay Systems Programmer" />
    </div>
  );
}
