import React from "react";
import ImageSlot from "./ImageSlot.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <ImageSlot
        name="hero"
        label="Cinematic garage"
        hint="Portfolio project image."
        alt="Red sports car in a dark cinematic garage."
        className="hero__image"
      />
      <div className="hero__content container">
        <h1 id="hero-title">Hi, I&apos;m Chandra Shekar</h1>
        <p className="hero-roles">Gameplay Systems Programmer</p>
        <hr className="hero__divider" aria-hidden="true" />
        <p className="lead">
          Building interactive gameplay experiences, immersive worlds and
          real-time cinematics.
        </p>
        <div className="hero__actions">
          <a className="button hero__button" href="#work">
            Explore Projects
          </a>
          <a className="button hero__button" href="#about">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
