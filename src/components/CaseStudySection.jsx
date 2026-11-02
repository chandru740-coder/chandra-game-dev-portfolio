import React from "react";
import ProjectImage from "./ProjectImage.jsx";

function CopyGroup({ group }) {
  return (
    <div className="case-copy-group">
      {group.title && <h3>{group.title}</h3>}
      {group.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {group.bullets && (
        <ul className="case-bullets">
          {group.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CaseStudySection({ section, layout = "right" }) {
  const hasImages = Boolean(section.images?.length);
  const classNames = [
    "case-section",
    hasImages ? `case-section--visual-${layout}` : "case-section--text-only",
    section.images?.length > 1 ? "case-section--gallery" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={classNames}
      id={section.id}
      data-project-section
      data-project-nav-label={section.navLabel || section.title}
      aria-labelledby={`${section.id}-title`}
    >
      <div className="container">
        <div className="case-section__layout">
          <div className="case-section__copy">
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            {section.lead && <p className="case-section__lead">{section.lead}</p>}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="case-bullets">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.groups?.map((group) => (
              <CopyGroup key={group.title} group={group} />
            ))}
          </div>
          {hasImages && (
            <div
              className={`case-gallery${section.images.length > 1 ? " case-gallery--paired" : ""}`}
            >
              {section.images.map((image) => (
                <ProjectImage key={image.src} image={image} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
