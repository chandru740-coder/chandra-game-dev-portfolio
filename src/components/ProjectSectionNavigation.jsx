import React, { useEffect, useState } from "react";

export default function ProjectSectionNavigation({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const initialHash = window.location.hash.slice(1);
    setActiveId(
      targets.some((target) => target.id === initialHash)
        ? initialHash
        : targets[0]?.id ?? "",
    );

    let frameId = 0;
    const updateActiveSection = () => {
      frameId = 0;
      const header = document.querySelector(".site-header");
      const nav = document.querySelector(".project-section-nav");
      const activationLine =
        (header?.offsetHeight ?? 0) + (nav?.offsetHeight ?? 0) + 24;
      let currentId = targets[0]?.id ?? "";

      for (const target of targets) {
        if (target.getBoundingClientRect().top > activationLine) {
          break;
        }
        currentId = target.id;
      }

      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atPageEnd) {
        currentId = targets[targets.length - 1]?.id ?? currentId;
      }
      setActiveId(currentId);
    };
    const scheduleUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [sections]);

  return (
    <nav className="project-section-nav" aria-label="Project sections">
      <div className="container">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={activeId === section.id ? "location" : undefined}
                onClick={() => setActiveId(section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
