import React from "react";
import ImageSlot from "./ImageSlot.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";

export default function ProjectPlaceholder({
  title,
  description,
  imageSlot,
  imageLabel,
  imageHint,
  inProgress = false,
}) {
  return (
    <div className="project-placeholder-page">
      <SiteHeader projectPage includeHome />
      <main className="project-placeholder">
        <div className="container">
          <a className="project-placeholder__back" href="/#work">
            Back to Featured Projects
          </a>
          <div className="project-placeholder__layout">
            <ImageSlot
              name={imageSlot}
              label={imageLabel}
              hint={imageHint}
              alt={`Placeholder for ${title} project imagery.`}
              className="project-placeholder__image"
            />
            <div className="project-placeholder__copy">
              {inProgress && (
                <p className="project__status">In Progress</p>
              )}
              <p className="project-placeholder__type">Project</p>
              <h1>{title}</h1>
              <p className="project-placeholder__description">{description}</p>
              <p className="project-placeholder__note">
                {inProgress
                  ? "This project is in development. More project details and original imagery will be added as the work progresses."
                  : "Original rendered stills and project details will be added here when available."}
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter projectPage />
    </div>
  );
}
