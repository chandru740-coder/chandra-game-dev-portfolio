const image = (path, alt, caption, dimensions, fit = "contain") => ({
  src: path,
  alt,
  caption,
  width: dimensions[0],
  height: dimensions[1],
  fit,
});

export const carCinematicSections = [
  {
    id: "environment-design",
    title: "Environment Design",
    lead:
      "Created a minimal premium garage environment with a reflective vehicle platform, architectural window elements and controlled lighting. Arranged the environment to establish a clean visual setting for automotive presentation.",
    images: [
      image(
        "/images/car-cinematics/01-environment/01-garage-overview/Screenshot%202026-11-01%20122659.png",
        "Wide Unreal Engine view of the garage environment and red sports car.",
        "Garage overview captured in Unreal Engine.",
        [1566, 866],
      ),
      image(
        "/images/car-cinematics/01-environment/02-garage-details/Screenshot%202026-11-01%20123124.png",
        "Garage scene with glass panels, reflective platform, and the red sports car.",
        "Garage environment details captured in Unreal Engine.",
        [1411, 642],
      ),
    ],
  },
  {
    id: "cinematic-camera-setup",
    title: "Cinematic Camera Setup",
    navLabel: "Camera Setup",
    lead:
      "Positioned multiple CineCameraActors around the vehicle to explore different viewing angles and cinematic compositions. Adjusted camera placement to capture the vehicle and environment from different perspectives.",
    images: [
      image(
        "/images/car-cinematics/02-camera-setup/03-camera-angles/Screenshot%202026-11-01%20123657.png",
        "Unreal Engine viewport and Sequencer showing camera placement around the car.",
        "CineCameraActor positions and camera composition.",
        [1416, 897],
      ),
    ],
  },
  {
    id: "level-sequencer-workflow",
    title: "Level Sequencer Workflow",
    navLabel: "Sequencer Workflow",
    lead:
      "Used Unreal Engine Level Sequencer to organise cinematic shots through Camera Cuts and multiple CineCameraActor tracks. Structured the sequence to control the progression between different camera views.",
    images: [
      image(
        "/images/car-cinematics/03-sequencer/04-sequencer-workflow/Screenshot%202026-11-01%20122804.png",
        "Unreal Engine Level Sequencer with Camera Cuts and multiple CineCameraActor tracks.",
        "Camera Cuts and camera tracks in the Level Sequencer.",
        [1581, 950],
      ),
      image(
        "/images/car-cinematics/03-sequencer/04-sequencer-workflow/Screenshot%202026-11-01%20123153.png",
        "Unreal Engine Sequencer timeline with multiple camera tracks and the garage scene.",
        "Sequencer timeline and camera track arrangement.",
        [1407, 946],
      ),
    ],
  },
  {
    id: "post-production",
    title: "Post-production",
    lead:
      "Edited the rendered cinematic footage in CapCut, incorporated background music and synchronised the visuals with the soundtrack to produce the final cinematic presentation.",
  },
  {
    id: "tools-and-technologies",
    title: "Tools and Technologies",
    bullets: [
      "Unreal Engine 5",
      "Level Sequencer",
      "CineCameraActor",
      "CapCut",
    ],
  },
];
