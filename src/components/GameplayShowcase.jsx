import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import { caseStudyVideos } from "../data/echoes.js";

function GameplayVideoSection({ video }) {
  return (
    <section
      className="case-showcase"
      id={video.id}
      data-project-section
      data-project-nav-label={video.navLabel || video.title}
      aria-labelledby={`${video.id}-title`}
    >
      <div className="container">
        <div className="case-showcase__heading">
          <h2 id={`${video.id}-title`}>{video.title}</h2>
          <p>{video.description}</p>
        </div>
        <MuxPlayer
          className="case-showcase__video"
          playbackId={video.playbackId}
          streamType="on-demand"
          controls
          autoPlay={false}
          loop={false}
          muted={false}
          playsInline
          aria-label={video.title}
        />
      </div>
    </section>
  );
}

export default function GameplayShowcase() {
  return (
    <div className="case-showcases">
      {caseStudyVideos.map((video) => (
        <GameplayVideoSection key={video.id} video={video} />
      ))}
    </div>
  );
}
