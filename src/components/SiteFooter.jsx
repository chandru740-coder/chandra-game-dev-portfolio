import React from "react";

const footerLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
];

export default function SiteFooter({
  projectPage = false,
  label = "Gameplay Systems Programmer",
}) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>{label}</p>
        <nav aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={projectPage ? `/${item.href}` : item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
