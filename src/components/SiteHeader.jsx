import React, { useEffect, useState } from "react";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
];

export default function SiteHeader({
  projectPage = false,
  includeHome = false,
  brandLabel = "Gameplay Systems Programmer",
}) {
  const [scrolled, setScrolled] = useState(false);
  const links = includeHome
    ? [{ href: "#top", label: "Home" }, ...navigation]
    : navigation;

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`site-header${projectPage ? " site-header--project" : ""}${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="site-header__inner container">
        <a className="site-header__brand" href={projectPage ? "/" : "#top"}>
          {brandLabel}
        </a>
        <nav aria-label="Main navigation">
          {links.map((item) => (
            <a
              key={item.href}
              href={projectPage ? `/${item.href}` : item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
