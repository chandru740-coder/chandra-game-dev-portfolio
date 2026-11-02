import React from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function CarCinematicShowcase() {
  return (
    <section
      className="car-cinematic-showcase"
      id="final-cinematic"
      data-project-section
      data-project-nav-label="Final Cinematic"
      aria-labelledby="car-cinematic-showcase-title"
    >
      <div className="container">
        <div className="car-cinematic-showcase__heading">
          <h2 id="car-cinematic-showcase-title">Final Cinematic Showcase</h2>
          <p>
            The completed automotive cinematic, presented in its original
            aspect ratio.
          </p>
        </div>
        <MuxPlayer
          className="car-cinematic-video"
          playbackId="8JR77iF8x5aYiGKlthX73s1RT2LDaaRjBJfs132Adtc"
          streamType="on-demand"
          controls
          autoPlay={false}
          loop={false}
          muted={false}
          playsInline
          aria-label="Premium Garage final cinematic"
        />
      </div>
    </section>
  );
}
