import React from "react";
import ImageSlot from "./ImageSlot.jsx";

export default function FeaturedProject() {
  return (
    <section
      className="featured-section"
      aria-labelledby="featured-title"
    >
      <div className="container">
        <div className="featured-layout">
          <ImageSlot
            name="interactable-game-template"
            label="Interactable Game Template project home screen"
            hint=""
            alt="Interactable Game Template project home screen."
            className="featured-image"
          />
          <div className="featured-copy">
            <p className="project__status">In Progress</p>
            <h2 id="featured-title">Project in Focus</h2>
            <h3>Interactable Game Template</h3>
            <p>
              An interactive gameplay systems and template project currently
              in development.
            </p>
            <a
              className="button featured-action"
              href="/projects/interactable-game-template/"
            >
              Explore Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
